"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { aboutFacts, aboutParagraphs, profile } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto w-full max-w-sm lg:sticky lg:top-32 lg:mx-0"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ocean/40 via-deep/60 to-night shadow-2xl shadow-night/60 backdrop-blur-md">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(80% 60% at 30% 20%, rgba(79,137,212,0.35) 0%, transparent 60%), radial-gradient(70% 60% at 80% 90%, rgba(255,226,122,0.22) 0%, transparent 60%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[7rem] font-semibold text-white/90 drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                RM
              </span>
            </div>
            <div className="grain absolute inset-0 opacity-[0.06] mix-blend-soft-light" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-night/50 px-4 py-3 backdrop-blur-md">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">
                  {profile.shortName}
                </span>
                <span className="text-xs text-white/55">
                  {profile.roles[0]}
                </span>
              </div>
              <Sparkles className="size-4 text-sunrise" />
            </div>
          </div>
          <div className="absolute -right-4 -top-4 -z-10 size-40 rounded-full bg-sunrise/20 blur-3xl" />
        </motion.div>

        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="About"
            title="Quiet systems, built to last."
            description="A little about the person behind the architecture diagrams."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            {aboutParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeUp}
                className="text-lg leading-relaxed text-white/70"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.dl
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] sm:grid-cols-2"
          >
            {aboutFacts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={fadeUp}
                className="flex flex-col gap-1.5 bg-white/[0.02] p-6"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.25em] text-sunrise/70">
                  {fact.label}
                </dt>
                <dd className="text-base text-white/85">{fact.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </Section>
  );
}
