"use client";

import { useEffect, useRef } from "react";

const FRAMES = 40;
const FRAME_MS = 80;
const SPRITES = {
  light: "/papers/kolmogorov-flow-light.avif",
  dark: "/papers/kolmogorov-flow-dark.avif",
};

// Vorticity of the turbulent Kolmogorov flow from the thesis runs, coloured in
// the site palette. The still is frame 0; while the paper is hovered, the
// frames of a short simulation (stacked in one image) play on a canvas, which
// copies each frame's exact pixels, and restart when they run out. Focusing the
// paper's link plays them too, as it reveals the summary. The frames follow
// the colour scheme, also when it changes while the page is open.
export default function FlowThumbnail() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const node = canvas.current;
    const paper = node?.closest(".paper");
    const ctx = node?.getContext("2d");
    if (!node || !paper || !ctx) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dark = matchMedia("(prefers-color-scheme: dark)");
    let sprite = new Image();
    const load = () => {
      sprite = new Image();
      sprite.src = dark.matches ? SPRITES.dark : SPRITES.light;
    };
    load();

    let raf = 0;
    let start = 0;
    const active = () => paper.matches(":hover, :focus-within");
    const draw = (now: number) => {
      const frame = Math.floor((now - start) / FRAME_MS) % FRAMES;
      const { width: w, height: h } = node;
      ctx.drawImage(sprite, 0, frame * h, w, h, 0, 0, w, h);
      raf = requestAnimationFrame(draw);
    };
    // Waits for the frames if they are still loading, then starts unless the
    // pointer has left in the meantime.
    const play = () => {
      const frames = sprite;
      frames.decode().then(
        () => {
          if (raf || frames !== sprite || !active()) return;
          node.width = frames.naturalWidth;
          node.height = frames.naturalHeight / FRAMES;
          start = performance.now();
          node.style.opacity = "1";
          raf = requestAnimationFrame(draw);
        },
        () => {},
      );
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      node.style.opacity = "0";
    };
    const leave = () => {
      if (!active()) stop();
    };
    const recolour = () => {
      stop();
      load();
      if (active()) play();
    };

    const events = [
      ["mouseenter", play],
      ["focusin", play],
      ["mouseleave", leave],
      ["focusout", leave],
    ] as const;
    for (const [type, listener] of events) paper.addEventListener(type, listener);
    dark.addEventListener("change", recolour);
    if (active()) play();
    return () => {
      for (const [type, listener] of events) paper.removeEventListener(type, listener);
      dark.removeEventListener("change", recolour);
      stop();
    };
  }, []);

  return (
    <>
      <picture>
        <source srcSet="/papers/kolmogorov-dark.jpg" media="(prefers-color-scheme: dark)" />
        <img src="/papers/kolmogorov-light.jpg" width={400} height={300} alt="" decoding="async" className="h-full w-full object-cover" />
      </picture>
      <canvas ref={canvas} className="absolute inset-0 h-full w-full opacity-0" />
    </>
  );
}
