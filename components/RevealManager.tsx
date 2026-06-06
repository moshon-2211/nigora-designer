"use client";

import { useEffect } from "react";

/**
 * Управляет появлением элементов с классом `.reveal` при прокрутке.
 * Один общий IntersectionObserver на все элементы (включая отрисованные
 * клиентскими компонентами — галерею и слайдер).
 */
export default function RevealManager() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    // даём DOM дорисоваться (галерея/слайдер добавляются клиентом)
    const id = requestAnimationFrame(() => {
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    });

    return () => {
      cancelAnimationFrame(id);
      io.disconnect();
    };
  }, []);

  return null;
}
