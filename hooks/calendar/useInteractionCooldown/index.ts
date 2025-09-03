import { useState, useRef, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { days } from "@utils/getDate";
import { getScreenWidth } from "@utils/getScreenDimensions";
import { useDate } from "@hooks/dayMoment/useDate";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";
import { ScrollView } from "react-native";

interface UseInteractionCooldownParams {
  delay?: number;
  setMomentSelected: (moment: any) => void;
  setCurrentIndex: (index: number) => void;
  scrollRef: React.RefObject<ScrollView | null>;
}

export function useInteractionCooldown({
  delay = 15000,
  setMomentSelected,
  setCurrentIndex,
  scrollRef,
}: UseInteractionCooldownParams) {
  const { dayOfWeek } = useDate();
  const { actualDayMoment } = useDayMoment();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const cleanupTimers = () => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    if (intervalRef.current !== null) clearInterval(intervalRef.current);
    timeoutRef.current = null;
    intervalRef.current = null;
  };

  const handleInteraction = useCallback(() => {
    setHasInteracted(true);
    console.log("Interaction détectée !");
    cleanupTimers();

    // init countdown (en secondes)
    setCountdown(delay / 1000);

    // décrémenter chaque seconde
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(intervalRef.current!);
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    // timer principal
    timeoutRef.current = setTimeout(() => {
      setHasInteracted(false);
      setCountdown(null);
      console.log("Retour sur la màj auto !");
      cleanupTimers();
    }, delay);
  }, [delay]);

  const resetInteractionCooldown = () => {
    setHasInteracted(false);
    setCountdown(null);
    console.log("Retour sur la màj auto !");
    cleanupTimers();
  };

  const updateScrollAndMoment = () => {
    if (!hasInteracted) {
      const todayIndex = days.findIndex((day) => day === dayOfWeek);
      if (todayIndex !== -1) {
        setCurrentIndex(todayIndex);
        scrollRef.current?.scrollTo({
          x: getScreenWidth() * todayIndex,
          animated: true,
        });
      }
      setMomentSelected(actualDayMoment);
    }
  };

  useFocusEffect(
    useCallback(() => {
      resetInteractionCooldown();
      return cleanupTimers;
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      updateScrollAndMoment();
    }, [hasInteracted, dayOfWeek, actualDayMoment])
  );

  useEffect(() => {
    updateScrollAndMoment();
  }, [hasInteracted, dayOfWeek, actualDayMoment]);

  // 🔹 Juste pour debug dans la console
  useEffect(() => {
    if (countdown !== null) {
      console.log(`⏳ Countdown: ${countdown}s restantes`);
    }
  }, [countdown]);

  return { handleInteraction, countdown };
}
