"use client";

import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";

import { languages, skillGroups } from "@/lib/data";
import { fadeUp, scaleReveal, stagger, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

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
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={scaleReveal}
            className="group flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-xl shadow-night/30 backdrop-blur-md transition-all duration-700 ease-[var(--ease-out-quart)] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
          >
            <h3 className="font-display text-lg font-semibold text-white">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-8 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full bg-sunrise/15 text-sunrise ring-1 ring-sunrise/25">
            <LanguagesIcon className="size-5" />
          </span>
          <h3 className="font-display text-lg font-semibold text-white">
            Languages I speak
          </h3>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {languages.map((language) => (
            <div key={language.language} className="flex flex-col gap-0.5">
              <span className="text-base text-white/90">
                {language.language}
              </span>
              <span className="text-sm text-white/50">
                {language.level}
                {language.note ? ` - ${language.note}` : ""}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
