"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

import { projects, type Project } from "@/lib/data";
import { GithubIcon } from "@/components/brand-icons";
import { EASE_OUT_QUART, fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function SlideVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-tl-[2.75rem] rounded-br-[2.75rem]">
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(140deg, ${project.accent}33 0%, #0c1f38 45%, #071426 100%)`,
          }}
        />
      )}
      <div
        className="absolute -right-10 -top-10 size-56 rounded-full blur-3xl"
        style={{ background: `${project.accent}55` }}
      />
      <div className="absolute inset-0 flex flex-col p-6">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
          <span className="size-2.5 rounded-full bg-white/20" />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            {project.tagline}
          </span>
          <span className="font-display text-4xl font-semibold text-white sm:text-5xl">
            {project.name}
          </span>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-surface px-3 py-1 text-xs text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="grain absolute inset-0 opacity-[0.05] mix-blend-soft-light" />
    </div>
  );
}

function Thumbnail({
  project,
  active,
  index,
  onSelect,
}: {
  project: Project;
  active: boolean;
  index: number;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`View project ${project.name}`}
      aria-current={active}
      className={cn(
        "group relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-xl transition-all duration-500 ease-[var(--ease-out-quart)] sm:w-36",
        active
          ? "ring-2 ring-sunrise ring-offset-2 ring-offset-night"
          : "opacity-50 hover:opacity-90",
      )}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover"
          sizes="160px"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(140deg, ${project.accent}44 0%, #0c1f38 60%, #071426 100%)`,
          }}
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/90 to-transparent p-2">
        <span className="line-clamp-1 text-[0.65rem] font-medium text-white sm:text-xs">
          {project.name}
        </span>
      </div>
      <span className="absolute left-1.5 top-1.5 font-mono text-[0.6rem] text-white/50">
        {String(index + 1).padStart(2, "0")}
      </span>
    </button>
  );
}

export function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

  const total = projects.length;
  const active = projects[index];

  const go = useCallback(
    (next: number) => {
      if (next === index) return;
      setDirection(next > index ? 1 : -1);
      setIndex((next + total) % total);
    },
    [index, total],
  );

  const nextSlide = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (reduceMotion) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nextSlide, prevSlide, reduceMotion]);

  const slideVariants = reduceMotion
    ? {
        enter: { opacity: 1 },
        center: { opacity: 1 },
        exit: { opacity: 1 },
      }
    : {
        enter: (dir: number) => ({
          opacity: 0,
          x: dir > 0 ? 60 : -60,
          filter: "blur(8px)",
        }),
        center: { opacity: 1, x: 0, filter: "blur(0px)" },
        exit: (dir: number) => ({
          opacity: 0,
          x: dir < 0 ? 60 : -60,
          filter: "blur(8px)",
        }),
      };

  const slideTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: EASE_OUT_QUART };

  return (
    <Section id="projects" label="Projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Case studies in reliability."
        description="Two products where careful architecture met real-world scale."
        className="mb-16"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Slide stage */}
        <motion.div variants={fadeUp} className="relative">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
            {/* Visual */}
            <div className="relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active.name}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                >
                  <SlideVisual project={active} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active.name}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                  className="flex h-full flex-col gap-6"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-sm text-sunrise/80">
                      {active.period}
                    </span>
                    <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                      {active.name}
                    </h3>
                    <span className="text-sm text-white/50">
                      {active.tagline}
                    </span>
                  </div>

                  <p className="text-base leading-relaxed text-white/70">
                    {active.description}
                  </p>

                  <ul className="flex flex-col gap-2.5">
                    {active.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-white/65"
                      >
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full"
                          style={{ background: active.accent }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {active.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    {active.live ? (
                      <Button asChild>
                        <a
                          href={active.live.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {active.live.label}
                          <ArrowUpRight className="size-4" />
                        </a>
                      </Button>
                    ) : null}
                    {active.repo ? (
                      <Button asChild variant="outline">
                        <a
                          href={active.repo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubIcon className="size-4" />
                          {active.repo.label}
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation bar */}
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                disabled={total <= 1}
                aria-label="Previous project"
              >
                <ArrowLeft className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                disabled={total <= 1}
                aria-label="Next project"
              >
                <ArrowRight className="size-4" />
              </Button>
              <span className="font-mono text-sm text-white/50">
                {String(index + 1).padStart(2, "0")}{" "}
                <span className="text-white/30">/</span>{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>

            {active.live ? (
              <a
                href={active.live.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-sunrise"
              >
                <ExternalLink className="size-4" />
                <span>Open project</span>
              </a>
            ) : null}
          </div>

          {/* Thumbnail strip */}
          <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
            {projects.map((project, i) => (
              <Thumbnail
                key={project.name}
                project={project}
                index={i}
                active={i === index}
                onSelect={() => go(i)}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
