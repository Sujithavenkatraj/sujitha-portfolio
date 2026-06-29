import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    let raf;
    const onMove = (e) => {
      setHidden(false);
      setPos({ x: e.clientX, y: e.clientY });
    };
    const onLeave = () => setHidden(true);
    const checkHover = (e) => {
      const target = e.target;
      setHovered(
        target.tagName === "A" || target.tagName === "BUTTON" ||
        target.closest("a") || target.closest("button")
      );
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", checkHover);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", checkHover);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Laggy follower for the outer ring
  useEffect(() => {
    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const current = { x: dot.x, y: dot.y };
    const animate = () => {
      current.x = lerp(current.x, pos.x, 0.12);
      current.y = lerp(current.y, pos.y, 0.12);
      setDot({ x: current.x, y: current.y });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [pos]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="pointer-events-none fixed z-[9998] rounded-full border border-primary-400/60 transition-all duration-75"
        style={{
          left: dot.x - (hovered ? 24 : 18),
          top: dot.y - (hovered ? 24 : 18),
          width: hovered ? 48 : 36,
          height: hovered ? 48 : 36,
          opacity: hidden ? 0 : 1,
          mixBlendMode: "difference",
        }}
      />
      {/* Dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-primary-400 transition-transform duration-75"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          opacity: hidden ? 0 : 1,
        }}
      />
    </>
  );
}
