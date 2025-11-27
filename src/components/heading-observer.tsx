"use client";

import { useEffect, useRef } from "react";

interface HeadingObserverProps {
  selector?: string;
}

export function HeadingObserver({ selector = "article h2[id], article h3[id]" }: HeadingObserverProps) {
  const hasAppliedHashRef = useRef(false);
  const currentHashRef = useRef<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const headings = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!headings.length) return;

    currentHashRef.current = window.location.hash;

    const scrollToHash = () => {
      if (hasAppliedHashRef.current) return;
      const hash = decodeURIComponent(window.location.hash || "");
      if (!hash) return;
      const target = document.getElementById(hash.replace(/^#/, ""));
      if (target) {
        hasAppliedHashRef.current = true;
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        });
      }
    };

    scrollToHash();
    const hashTimer = window.setTimeout(scrollToHash, 150);

    const visible = new Set<string>();
    let ticking = false;

    const updateHash = () => {
      ticking = false;
      if (!visible.size) return;
      const ordered = [...visible].sort((a, b) => {
        const aRect = document.getElementById(a)?.getBoundingClientRect().top ?? 0;
        const bRect = document.getElementById(b)?.getBoundingClientRect().top ?? 0;
        return aRect - bRect;
      });
      const nextId = ordered[0];
      if (!nextId) return;
      const nextHash = `#${nextId}`;
      if (currentHashRef.current === nextHash) return;
      currentHashRef.current = nextHash;
      window.history.replaceState(null, "", nextHash);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          if (!id) return;
          if (entry.isIntersecting) {
            visible.add(id);
          } else {
            visible.delete(id);
          }
        });
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateHash);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      window.clearTimeout(hashTimer);
      observer.disconnect();
    };
  }, [selector]);

  return null;
}
