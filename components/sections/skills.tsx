"use client";

import { motion } from "framer-motion";

import { languages, skillGroups } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <SectionHeading
        eyebrow="Toolkit"
        title="The stack I reach for."
        description="Backend-first, cloud-native, and comfortable across the whole product surface."
        className="mb-16"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="border-t border-white/10"
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            className="grid gap-x-10 gap-y-4 border-b border-white/10 py-8 md:grid-cols-[16rem_1fr]"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm text-sunrise/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-medium text-white">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[17px] text-white/70">
              {group.items.map((item, itemIndex) => (
                <span key={item} className="flex items-center gap-4">
                  {itemIndex > 0 ? (
                    <span aria-hidden className="text-white/20">
                      /
                    </span>
                  ) : null}
                  <span className="transition-colors duration-500 hover:text-white">
                    {item}
                  </span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={fadeUp}
          className="grid gap-x-10 gap-y-4 py-8 md:grid-cols-[16rem_1fr]"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-sunrise/70">*</span>
            <h3 className="font-display text-2xl font-medium text-white">
              Languages
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {languages.map((language) => (
              <div key={language.language} className="flex items-baseline gap-2">
                <span className="text-[17px] text-white/85">
                  {language.language}
                </span>
                <span className="text-sm text-white/45">
                  {language.level}
                  {language.note ? ` · ${language.note}` : ""}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
