"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export type SlideExportOptions = {
  element: HTMLElement;
  projectName: string;
  slideIndex: number;
  totalSlides?: number;
  onProgress?: (message: string) => void;
};

const COLOR_PROPS = [
  "color",
  "background-color",
  "border-top-color",
  "border-right-color",
  "border-bottom-color",
  "border-left-color",
  "outline-color",
  "caret-color",
  "box-shadow",
  "text-shadow",
  "fill",
  "stroke",
  "background-image",
] as const;

export async function exportSlideToPDF({
  element,
  projectName,
  slideIndex,
  totalSlides,
  onProgress,
}: SlideExportOptions): Promise<void> {
  try {
    const width = 1920;
    const height = 1080;
    const scale = 2;

    onProgress?.("Capturing slide...");

    const canvas = await html2canvas(element, {
      width,
      height,
      scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#071426",
      logging: false,
      windowWidth: width,
      windowHeight: height,
      onclone: (clonedDoc: Document, clonedEl: HTMLElement) => {
        const overrideStyle = clonedDoc.createElement("style");
        overrideStyle.textContent = [
          "::selection { background: #ffe27a !important; color: #071426 !important; }",
          "::-webkit-scrollbar { display: none !important; }",
          "::-webkit-scrollbar-thumb { background: #1b4472 !important; }",
          "::-webkit-scrollbar-track { background: #071426 !important; }",
        ].join("\n");
        clonedDoc.head?.appendChild(overrideStyle);

        const origAll: Element[] = [
          element,
          ...Array.from(element.querySelectorAll("*")),
        ];
        const cloneAll: Element[] = [
          clonedEl,
          ...Array.from(clonedEl.querySelectorAll("*")),
        ];

        for (let i = 0; i < origAll.length && i < cloneAll.length; i++) {
          const orig = origAll[i] as HTMLElement;
          const clone = cloneAll[i] as HTMLElement;
          const computed = window.getComputedStyle(orig);

          for (const prop of COLOR_PROPS) {
            const value = computed.getPropertyValue(prop);
            if (value) {
              clone.style.setProperty(prop, value, "important");
            }
          }
        }
      },
    });

    onProgress?.("Generating PDF...");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [width, height],
    });

    const imgData = canvas.toDataURL("image/png", 1.0);
    pdf.addImage(imgData, "PNG", 0, 0, width, height);

    pdf.setFontSize(12);
    pdf.setTextColor(255, 226, 122);

    const slideTitle = `${projectName} — Project Slide ${slideIndex}`;
    pdf.text(slideTitle, 50, height - 30);

    const totalPages = (
      pdf.internal as unknown as { getNumberOfPages: () => number }
    ).getNumberOfPages();

    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      const footerText = "Project presentation • Generated from personal portfolio";
      const pageCount = `Slide ${slideIndex}${totalSlides ? ` of ${totalSlides}` : ""} • Page ${i} of ${totalPages}`;
      pdf.setFontSize(8);
      pdf.setTextColor(150, 150, 150);
      pdf.text(footerText, width / 2, height - 10, { align: "center" });
      pdf.text(pageCount, width - 50, height - 10, { align: "right" });
    }

    const filename = `${projectName.replace(/\s+/g, "-").toLowerCase()}-slide-${slideIndex}.pdf`;
    pdf.save(filename);

    onProgress?.("Download complete!");
  } catch (error) {
    console.error("PDF export failed:", error);
    throw new Error("Failed to generate PDF. Please try saving via browser print dialog.");
  }
}
