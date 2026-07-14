"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import { profile } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { Magnetic } from "@/components/magnetic";

export function Contact() {
  return (
    <Section id="contact" label="Contact" className="py-28 sm:py-36 lg:py-44">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="panel relative flex flex-col items-center gap-10 overflow-hidden rounded-[2.5rem] px-6 py-20 text-center sm:px-16"
      >
        <div className="absolute -top-24 left-1/2 -z-10 size-72 -translate-x-1/2 rounded-full bg-sunrise/15 blur-[100px]" />

        <motion.span
          variants={fadeUp}
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-sunrise/80"
        >
          <span className="h-px w-8 bg-sunrise/50" />
          Contact
          <span className="h-px w-8 bg-sunrise/50" />
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-white text-balance sm:text-6xl"
        >
          Let&apos;s build something calm and reliable together.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="max-w-xl text-lg leading-relaxed text-white/60 text-balance"
        >
          Open to backend, fullstack, and systems-focused roles. I usually reply
          within a day.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-3 font-display text-2xl font-medium text-white transition-colors hover:text-sunrise sm:text-3xl"
        >
          <Mail className="size-6 text-sunrise" />
          {profile.email}
          <ArrowUpRight className="size-5 opacity-0 transition-all duration-500 ease-[var(--ease-out-quart)] group-hover:translate-x-1 group-hover:opacity-100" />
        </motion.a>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <Button asChild size="lg">
                <a href={`mailto:${profile.email}`}>
                  Send a message
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="outline">
                <a href={profile.resume} download>
                  <Download className="size-4" />
                  Resume
                </a>
              </Button>
            </Magnetic>
          </div>
          <SocialLinks />
        </motion.div>
      </motion.div>

      <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
        <span>
          © {profile.name}. Crafted with care in {profile.location}.
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.2em]">
          Next.js · Tailwind · Framer Motion
        </span>
      </footer>
    </Section>
  );
}
