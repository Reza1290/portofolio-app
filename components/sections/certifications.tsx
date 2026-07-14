"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

import { achievements, certifications } from "@/lib/data";
import { fadeUp, stagger, staggerFast, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  return (
    <Section id="certifications" label="Certifications and awards">
      <SectionHeading
        eyebrow="Credentials"
        title="Certified, and occasionally celebrated."
        description="Continuous learning paired with a few milestones along the way."
        className="mb-16"
      />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-white/80">
            <BadgeCheck className="size-5 text-sky" />
            <h3 className="font-display text-lg font-semibold">
              Certifications
            </h3>
          </div>
          <motion.ul
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-3"
          >
            {certifications.map((cert) => (
              <motion.li
                key={cert.title}
                variants={fadeUp}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-md transition-all duration-500 ease-[var(--ease-out-quart)] hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-base text-white/90">{cert.title}</span>
                  <span className="text-sm text-white/50">{cert.issuer}</span>
                </div>
                <Badge variant="outline">{cert.year}</Badge>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-white/80">
            <Award className="size-5 text-sunrise" />
            <h3 className="font-display text-lg font-semibold">
              Awards & achievements
            </h3>
          </div>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-3"
          >
            {achievements.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-md transition-all duration-500 ease-[var(--ease-out-quart)] hover:border-sunrise/25 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-base text-white/90">
                      {item.title}
                    </span>
                    <span className="text-sm text-white/50">
                      {item.context}
                    </span>
                  </div>
                  <Badge variant="accent">{item.scope}</Badge>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
}
