import { useState, useEffect, useRef } from "react";

export function useSmoothProgress(
  localCountdown: number | null,
  total = 15,
  resetProgressKey: number
) {
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    if (localCountdown === null) {
      setProgress(0);
      startTimeRef.current = null;
      return;
    }

    const targetTime = localCountdown * 1000; // temps restant en ms

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;
      const currentProgress =
        ((total * 1000 - targetTime + elapsed) / (total * 1000)) * 100;

      setProgress(Math.min(currentProgress, 100));

      if (currentProgress < 100) {
        animRef.current = requestAnimationFrame(step);
      } else {
        setProgress(0);
      }
    };

    animRef.current = requestAnimationFrame(step);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      startTimeRef.current = null;
    };
  }, [localCountdown, total, resetProgressKey]);

  return progress;
}
