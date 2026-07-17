"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import mePhoto from "@/public/me.png";
import { aboutFacts, aboutParagraphs, profile } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <Section id="about" label="About">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-sm lg:sticky lg:top-32 lg:mx-0"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface">
            <Image
              src={mePhoto}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              placeholder="blur"
              className="object-cover"
              style={{ objectPosition: "62% 28%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/10 to-transparent" />
            <div className="grain absolute inset-0 opacity-[0.05] mix-blend-soft-light" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-night/55 px-4 py-3">
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
            animate="visible"
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
            animate="visible"
            className="border-t border-white/10"
          >
            {aboutFacts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={fadeUp}
                className="flex items-baseline justify-between gap-6 border-b border-white/10 py-4"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.25em] text-sunrise/70">
                  {fact.label}
                </dt>
                <dd className="text-right text-base text-white/85">
                  {fact.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </Section>
  );
}
