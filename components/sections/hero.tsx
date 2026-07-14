"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";

import { heroStats, profile } from "@/lib/data";
import { EASE_OUT_QUART, fadeUp, stagger } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { Magnetic } from "@/components/magnetic";
import { Comet } from "@/components/comet";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-32 sm:px-8"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        <motion.div
          variants={fadeUp}
          className="flex w-fit items-center gap-3 text-sm text-white/75"
        >
          <Comet />
          <span className="tracking-wide">Available for new work</span>
          <span className="h-4 w-px bg-white/15" />
          <span className="inline-flex items-center gap-1.5 text-white/55">
            <MapPin className="size-3.5" />
            {profile.location}
          </span>
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.p
            variants={fadeUp}
            className="font-mono text-sm uppercase tracking-[0.4em] text-sunrise/80"
          >
            {profile.roles.join("  /  ")}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] text-white text-balance sm:text-7xl lg:text-8xl"
          >
            {profile.name}
          </motion.h1>
        </div>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-xl leading-relaxed text-white/70 text-balance sm:text-2xl"
        >
          {profile.headline}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
          <Magnetic>
            <Button asChild size="lg">
              <a href="#projects">
                View selected work
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="outline">
              <a href={profile.resume} download>
                <Download className="size-4" />
                Download resume
              </a>
            </Button>
          </Magnetic>
          <SocialLinks className="sm:ml-2" />
        </motion.div>

        <motion.dl
          variants={fadeUp}
          className="mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <dt className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="text-sm leading-snug text-white/55">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1, ease: EASE_OUT_QUART }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/80 lg:flex"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
