import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let ticking = false;

    const handleMove = (e) => {
      const source = e.touches ? e.touches[0] : e;
      mouseX = source.clientX;
      mouseY = source.clientY;
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    const update = () => {
      glow.style.left = `${mouseX}px`;
      glow.style.top = `${mouseY}px`;
      glow.style.opacity = mouseY < window.innerHeight * 1.2 ? "1" : "0.3";

      ring.style.left = `${mouseX}px`;
      ring.style.top = `${mouseY}px`;
      ring.style.opacity = "1";

      const el = document.elementFromPoint(mouseX, mouseY);
      const isInteractive = el && el.closest("a, button, .flip-card, .skill-chip, input, textarea, label");
      ring.classList.toggle("over-link", !!isInteractive);
      ticking = false;
    };

    const handleTouchEnd = () => { ring.style.opacity = "0"; };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove, { passive: true });
    document.addEventListener("touchstart", handleMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchstart", handleMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      <div id="glow-effect" ref={glowRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
