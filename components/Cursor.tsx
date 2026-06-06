"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    if (!fine) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    document.body.classList.add("has-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    };
    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      ring.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    const hoverSel = "a,button,.tile,summary,.svc,.step";
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(hoverSel))
        document.body.classList.add("hovering");
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(hoverSel))
        document.body.classList.remove("hovering");
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor", "hovering");
    };
  }, []);

  return (
    <>
      <div className="cur" aria-hidden ref={ringRef} />
      <div className="curd" aria-hidden ref={dotRef} />
    </>
  );
}
