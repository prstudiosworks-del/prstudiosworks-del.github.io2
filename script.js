(() => {
  const bars = document.querySelectorAll('.wave-bar');
  if (!bars.length) return;

  let t = 0;
  const tick = () => {
    t += 0.06;
    bars.forEach((bar, i) => {
      const v =
        0.3 +
        Math.sin(t + i * 0.35) * 0.25 +
        Math.sin(t * 1.25 + i * 0.55) * 0.15;

      const h = Math.max(8, Math.min(54, v * 54));
      bar.style.height = `${h}px`;
      bar.style.background =
        v > 0.62 ? 'rgba(255,61,46,0.85)' : 'rgba(245,242,237,0.15)';
    });
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
})();

