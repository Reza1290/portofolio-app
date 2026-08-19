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

/**
 * Export a single project slide as PDF
 */
export async function exportSlideToPDF({
  element,
  projectName,
  slideIndex,
  totalSlides,
  onProgress,
}: SlideExportOptions): Promise<void> {
  try {
    // Clone the element safely
    const clone = element.cloneNode(true) as HTMLElement;

    // Remove non-essential elements from clone for clean PDF
    clone.innerHTML = clone.innerHTML.replace(/class="([^"]*?)(Navigation|navigation|Thumbnail|thumbnail)[^"]*"/g, '');

    document.body.appendChild(clone);

    const width = 1920;
    const height = 1080;
    const scale = 2;

    onProgress?.("Capturing slide...");

    const canvas = await html2canvas(clone, {
      width,
      height,
      scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#071426',
      logging: false,
      windowWidth: width,
      windowHeight: height
    });

    document.body.removeChild(clone);

    onProgress?.("Generating PDF...");

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [width, height]
    });

    // Add slide image
    const imgData = canvas.toDataURL('image/png', 1.0);
    pdf.addImage(imgData, 'PNG', 0, 0, width, height);

    // Add slide info at bottom
    pdf.setFontSize(12);
    pdf.setTextColor(255, 226, 122); // Sunrise color

    const slideTitle = `${projectName} — Project Slide ${slideIndex}`;
    pdf.text(slideTitle, 50, height - 30);

    const totalPages = (pdf.internal as unknown as { getNumberOfPages: () => number }).getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);

      // Footer text
      const footerText = `Project presentation • Generated from personal portfolio`;
      const pageCount = `Slide ${slideIndex}${totalSlides ? ` of ${totalSlides}` : ""} • Page ${i} of ${totalPages}`;

      pdf.setFontSize(8);
      pdf.setTextColor(150, 150, 150);
      pdf.text(footerText, width / 2, height - 10, { align: 'center' });
      pdf.text(pageCount, width - 50, height - 10, { align: 'right' });
    }

    // Save
    const filename = `${projectName.replace(/\s+/g, '-').toLowerCase()}-slide-${slideIndex}.pdf`;
    pdf.save(filename);

    onProgress?.("Download complete!");
  } catch (error) {
    console.error('PDF export failed:', error);
    throw new Error('Failed to generate PDF. Please try saving via browser print dialog.');
  }
}

/**
 * Fallback: Open browser print dialog
 */
export function fallbackToPrint(): void {
  window.print();
}
