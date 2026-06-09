"use client";
import { useEffect, useRef, ReactNode } from "react";

type Direction = "up" | "left" | "right" | "emerge";

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const transition =
      "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1), filter 1s cubic-bezier(0.16,1,0.3,1)";

    el.style.transition = transition;
    el.style.opacity = "0";

    if (direction === "up")    el.style.transform = "translateY(90px)";
    if (direction === "left")  el.style.transform = "translateX(-80px)";
    if (direction === "right") el.style.transform = "translateX(80px)";
    if (direction === "emerge") {
      el.style.transform = "scale(0.88) translateY(70px)";
      el.style.filter = "blur(10px)";
    }

    let timer: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer);
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            el.style.transition = transition;
            el.style.opacity = "1";
            el.style.transform = "none";
            el.style.filter = "none";
          }, delay);
        } else {
          // Reset instantly (sin transición) para que vuelva a animar al re-entrar
          el.style.transition = "none";
          el.style.opacity = "0";
          if (direction === "up")    el.style.transform = "translateY(90px)";
          if (direction === "left")  el.style.transform = "translateX(-80px)";
          if (direction === "right") el.style.transform = "translateX(80px)";
          if (direction === "emerge") {
            el.style.transform = "scale(0.88) translateY(70px)";
            el.style.filter = "blur(10px)";
          }
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(timer); };
  }, [delay, direction, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
