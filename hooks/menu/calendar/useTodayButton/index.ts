import { useState, useEffect } from "react";

export function useTodayButton(
  countdown: number | null,
  setHasInteracted: (interacted: boolean) => void,
  forceRefresh: () => void
) {
  const [localCountdown, setLocalCountdown] = useState<number | null>(
    countdown
  );
  const [isPressed, setIsPressed] = useState<boolean>(false);
  useEffect(() => {
    setLocalCountdown(countdown);
  }, [countdown]);

  function handlePressIn() {
    setIsPressed(true);
  }
  function handlePressOut() {
    setIsPressed(false);
    setHasInteracted(false);
    forceRefresh();
  }

  return { localCountdown, handlePressIn, handlePressOut, isPressed };
}
