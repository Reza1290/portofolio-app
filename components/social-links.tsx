import { Mail, Globe } from "lucide-react";

import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Website", href: profile.website, icon: Globe },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map(({ label, href, icon: Icon }) => {
        const external = !href.startsWith("mailto:");
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition-all duration-500 ease-[var(--ease-out-quart)] hover:-translate-y-0.5 hover:border-sunrise/30 hover:bg-white/10 hover:text-white"
          >
            <Icon className="size-[18px] transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:scale-110" />
          </a>
        );
      })}
    </div>
  );
}
