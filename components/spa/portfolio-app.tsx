"use client";

import { useCallback, useEffect, useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Download, MapPin } from "lucide-react";

import { heroStats, navItems, profile } from "@/lib/data";
import type { GraphNode } from "@/lib/constellation";
import { EASE_OUT_QUART, fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Comet } from "@/components/comet";
import { DeerIcon } from "@/components/deer-icon";
import { Magnetic } from "@/components/magnetic";
import { SocialLinks } from "@/components/social-links";
import { NeuralGraph } from "@/components/spa/neural-graph";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

type ViewId = "home" | GraphNode["id"];

const sectionMap: Record<GraphNode["id"], ComponentType> = {
  about: About,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  certifications: Certifications,
  contact: Contact,
};

export function PortfolioApp() {
  const [active, setActive] = useState<ViewId>("home");

  const open = useCallback((id: ViewId) => setActive(id), []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive("home");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const ActiveSection = active === "home" ? null : sectionMap[active];

  return (
    <div className="relative flex h-[100svh] flex-col overflow-hidden">
      <header className="relative z-30 flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <button
          type="button"
          onClick={() => open("home")}
          className="group flex items-center gap-2.5"
          aria-label="Back to map"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-sunrise/15 text-dawn ring-1 ring-sunrise/25 transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:scale-105">
            <DeerIcon className="size-5" />
          </span>
          <span className="hidden font-display text-sm font-medium tracking-wide text-white/90 sm:block">
            {profile.shortName}
          </span>
        </button>

        <nav className="relative flex items-start gap-5 overflow-x-auto px-1 sm:gap-7">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-1 top-[8px] h-px bg-white/10"
          />
          {navItems.map((item) => {
            const id = item.href.replace("#", "") as ViewId;
            const isActive = active === id;
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => open(id)}
                aria-current={isActive ? "page" : undefined}
                className="group relative flex shrink-0 flex-col items-center gap-1.5"
              >
                <span className="relative flex size-[17px] items-center justify-center">
                  <span
                    className={cn(
                      "absolute rounded-full bg-sunrise/40 blur-[3px] transition-all duration-500",
                      isActive ? "size-4" : "size-0",
                    )}
                  />
                  <span
                    className={cn(
                      "relative rounded-full transition-all duration-500",
                      isActive
                        ? "size-2.5 bg-dawn shadow-[0_0_10px_2px_rgba(255,226,122,0.65)]"
                        : "size-1.5 bg-white/40 group-hover:bg-white/80",
                    )}
                  />
                </span>
                <span
                  className={cn(
                    "text-xs transition-colors duration-500",
                    isActive
                      ? "text-white"
                      : "text-white/45 group-hover:text-white/85",
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </header>

      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {active === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT_QUART }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 hidden md:block">
                <NeuralGraph onSelect={open} />
              </div>
              <HeroCore onOpen={open} />
            </motion.div>
          ) : (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: EASE_OUT_QUART }}
              className="absolute inset-0 overflow-y-auto bg-night/85"
            >
              {ActiveSection ? <ActiveSection /> : null}

              <div className="pointer-events-none sticky bottom-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => open("home")}
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm text-white/80 shadow-lg shadow-night/50 transition-all duration-500 ease-[var(--ease-out-quart)] hover:-translate-y-0.5 hover:bg-surface-2 hover:text-white"
                >
                  <ArrowLeft className="size-4" />
                  Back to map
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function HeroCore({ onOpen }: { onOpen: (id: ViewId) => void }) {
  return (
    <div className="pointer-events-auto absolute inset-0 overflow-y-auto md:pointer-events-none">
      <div className="flex min-h-full items-center justify-center px-6 py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="pointer-events-auto flex max-w-xl flex-col items-center gap-6 text-center"
        >
        <motion.div
          variants={fadeUp}
          className="pointer-events-auto flex w-fit items-center gap-3 text-sm text-white/75"
        >
          <Comet />
          <span className="tracking-wide">Available for new work</span>
          <span className="h-4 w-px bg-white/15" />
          <span className="inline-flex items-center gap-1.5 text-white/55">
            <MapPin className="size-3.5" />
            {profile.location}
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.4em] text-sunrise/80"
        >
          {profile.roles.join("  /  ")}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl font-semibold leading-[1.02] text-white text-balance sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-md text-lg leading-relaxed text-white/70 text-balance"
        >
          {profile.headline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="pointer-events-auto flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic>
            <Button onClick={() => onOpen("projects")}>
              Explore the work
              <ArrowUpRight className="size-4" />
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild variant="outline">
              <a href={profile.resume} download>
                <Download className="size-4" />
                Resume
              </a>
            </Button>
          </Magnetic>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="pointer-events-auto grid grid-cols-2 gap-x-10 gap-y-3 pt-2 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <span className="font-display text-2xl font-semibold text-white">
                {stat.value}
              </span>
              <span className="text-xs leading-snug text-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="pointer-events-auto pt-2">
          <SocialLinks />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="pointer-events-auto grid w-full grid-cols-2 gap-2 pt-2 sm:grid-cols-3 md:hidden"
        >
          {navItems
            .filter((item) => item.href !== "#home")
            .map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => onOpen(item.href.replace("#", "") as ViewId)}
                className="rounded-2xl bg-surface px-4 py-3 text-sm text-white/80 transition-colors duration-500 hover:bg-surface-2 hover:text-white"
              >
                {item.label}
              </button>
            ))}
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
