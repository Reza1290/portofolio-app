"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navItems, profile } from "@/lib/data";
import { EASE_OUT_QUART } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-6">
      <motion.nav
        initial={reduce ? false : { y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE_OUT_QUART, delay: 0.2 }}
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-700 ease-[var(--ease-out-quart)] sm:px-6",
          scrolled
            ? "border-white/10 bg-surface shadow-lg shadow-night/40"
            : "border-transparent bg-transparent",
        )}
      >
        <a
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-sunrise/15 font-display text-sm font-semibold text-dawn ring-1 ring-sunrise/25 transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:scale-105">
            RM
          </span>
          <span className="hidden font-display text-sm font-medium tracking-wide text-white/90 sm:block">
            {profile.shortName}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-500",
                  isActive ? "text-white" : "text-white/55 hover:text-white/90",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/8 ring-1 ring-white/10"
                    transition={{ duration: 0.6, ease: EASE_OUT_QUART }}
                  />
                ) : null}
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="hidden sm:inline-flex"
          >
            <a href="#contact">Let&apos;s talk</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-surface text-white md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT_QUART }}
            className="fixed inset-0 -z-10 flex flex-col items-center justify-center gap-2 bg-night md:hidden"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: EASE_OUT_QUART,
                  delay: 0.05 * index,
                }}
                className="font-display text-2xl font-medium text-white/80 transition-colors hover:text-sunrise"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
