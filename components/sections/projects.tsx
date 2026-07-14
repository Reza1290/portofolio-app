"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects, type Project } from "@/lib/data";
import { GithubIcon } from "@/components/brand-icons";
import { fadeUp, scaleReveal, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl shadow-night/50">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(140deg, ${project.accent}33 0%, #0c1f38 45%, #071426 100%)`,
        }}
      />
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
                className="rounded-full border border-white/10 bg-night/50 px-3 py-1 text-xs text-white/70"
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

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Case studies in reliability."
        description="Two products where careful architecture met real-world scale."
        className="mb-16"
      />

      <div className="flex flex-col gap-24 lg:gap-32">
        {projects.map((project, index) => {
          const flipped = index % 2 === 1;
          return (
            <motion.article
              key={project.name}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <motion.div
                variants={scaleReveal}
                className={cn(flipped && "lg:order-2")}
              >
                <Magnetic strength={0.08}>
                  <ProjectVisual project={project} />
                </Magnetic>
              </motion.div>

              <div
                className={cn(
                  "flex flex-col gap-6",
                  flipped && "lg:order-1",
                )}
              >
                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <span className="font-mono text-sm text-sunrise/80">
                    {project.period}
                  </span>
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {project.name}
                  </h3>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="text-lg leading-relaxed text-white/70"
                >
                  {project.description}
                </motion.p>

                <motion.ul variants={fadeUp} className="flex flex-col gap-2.5">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-white/65"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full"
                        style={{ background: project.accent }}
                      />
                      {highlight}
                    </li>
                  ))}
                </motion.ul>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                  {project.live ? (
                    <Button asChild>
                      <a
                        href={project.live.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.live.label}
                        <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                  ) : null}
                  {project.repo ? (
                    <Button asChild variant="outline">
                      <a
                        href={project.repo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="size-4" />
                        {project.repo.label}
                      </a>
                    </Button>
                  ) : null}
                </motion.div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
