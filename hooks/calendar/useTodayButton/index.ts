import { useState, useEffect } from "react";

export function useTodayButton(
  countdown: number | null,
  setHasInteracted: (interacted: boolean) => void,
) {
  const [localCountdown, setLocalCountdown] = useState<number | null>(
    countdown
  );
  const [isPressed, setIsPressed] = useState<boolean>(false);
  useEffect(() => {
    setLocalCountdown(countdown);
  }, [countdown]);

  function handlePressIn() {
    setHasInteracted(false);
    setIsPressed(true);
  }
  function handlePressOut() {
    setIsPressed(false);
  }

  return { localCountdown, handlePressIn, handlePressOut, isPressed };
}
