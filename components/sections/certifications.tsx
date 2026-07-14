"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

import { achievements, certifications } from "@/lib/data";
import { fadeUp, staggerFast, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

export function Certifications() {
  return (
    <Section id="certifications" label="Certifications and awards">
      <SectionHeading
        eyebrow="Credentials"
        title="Certified, and occasionally celebrated."
        description="Continuous learning paired with a few milestones along the way."
        className="mb-16"
      />

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-white/60">
            <BadgeCheck className="size-4 text-sky" />
            <h3 className="font-mono text-xs uppercase tracking-[0.28em]">
              Certifications
            </h3>
          </div>
          <motion.ul
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="border-t border-white/10"
          >
            {certifications.map((cert) => (
              <motion.li
                key={cert.title}
                variants={fadeUp}
                className="group flex items-baseline justify-between gap-4 border-b border-white/10 py-4 transition-colors duration-500"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-base text-white/90 transition-colors duration-500 group-hover:text-sunrise">
                    {cert.title}
                  </span>
                  <span className="text-sm text-white/45">{cert.issuer}</span>
                </div>
                <span className="font-mono text-sm text-white/50">
                  {cert.year}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-white/60">
            <Award className="size-4 text-sunrise" />
            <h3 className="font-mono text-xs uppercase tracking-[0.28em]">
              Awards & achievements
            </h3>
          </div>
          <motion.ul
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="border-t border-white/10"
          >
            {achievements.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="group flex items-baseline justify-between gap-6 border-b border-white/10 py-4"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-base text-white/90 transition-colors duration-500 group-hover:text-sunrise">
                    {item.title}
                  </span>
                  <span className="text-sm text-white/45">{item.context}</span>
                </div>
                <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-dawn/70">
                  {item.scope}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </Section>
  );
}
