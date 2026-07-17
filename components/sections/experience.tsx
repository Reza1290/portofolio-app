"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { experiences } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="experience" label="Experience">
      <SectionHeading
        eyebrow="Experience"
        title="A path across teams and systems."
        description="From high-volume warehouse platforms to healthcare APIs and remote product teams."
        className="mb-16"
      />

      <div ref={containerRef} className="relative">
        <div className="absolute left-[7px] top-3 h-full w-px bg-white/10 md:left-[calc(11rem+7px)]" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[7px] top-3 h-full w-px origin-top bg-gradient-to-b from-sunrise via-sky to-transparent md:left-[calc(11rem+7px)]"
        />

        <motion.ol
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((item, index) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              variants={fadeUp}
              className="relative grid grid-cols-1 gap-x-12 gap-y-3 py-9 pl-9 md:grid-cols-[11rem_1fr] md:pl-0"
            >
              {index > 0 ? (
                <span className="absolute inset-x-0 top-0 h-px bg-white/8 md:left-[calc(11rem+3rem)]" />
              ) : null}

              <span className="absolute left-0 top-[2.6rem] size-3.5 rounded-full bg-sunrise shadow-[0_0_16px_rgba(255,226,122,0.6)] ring-4 ring-night md:left-[11rem] md:top-11" />

              <div className="flex flex-col gap-1 md:pr-12 md:pt-9 md:text-right">
                <span className="font-mono text-sm text-sunrise/80">
                  {item.period}
                </span>
                <span className="text-sm text-white/50">{item.location}</span>
                <span className="text-xs text-white/40">{item.employment}</span>
              </div>

              <div className="group flex flex-col gap-4 md:pl-12 md:pt-9">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-2xl font-medium text-white">
                    {item.role}
                  </h3>
                  <p className="text-base text-sunrise/70">{item.company}</p>
                </div>

                <p className="max-w-2xl text-sm leading-relaxed text-white/60">
                  {item.summary}
                </p>

                <ul className="flex max-w-2xl flex-col gap-2.5">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex gap-3 text-sm leading-relaxed text-white/65"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky/70" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {item.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  );
}
