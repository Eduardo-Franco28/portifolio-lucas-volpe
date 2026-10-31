"use client";

import type { RefObject } from "react";
import { gsap, SplitText, useGSAP, reducedMotion } from "./gsap";

// Entrada padrão de uma seção: títulos [data-split] sobem linha por linha,
// depois cada [data-reveal] sobe com opacidade, em sequência.
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root || reducedMotion()) return;

      root.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 105,
              duration: 0.9,
              ease: "expo.out",
              stagger: 0.09,
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            }),
        });
      });

      root.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-reveal]");
        if (!items.length) return;
        gsap.from(items, {
          y: 28,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.075,
          scrollTrigger: { trigger: group, start: "top 82%", once: true },
        });
      });
    },
    { scope },
  );
}
