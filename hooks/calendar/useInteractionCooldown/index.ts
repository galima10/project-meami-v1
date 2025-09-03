import { useState, useRef, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useDate } from "@hooks/dayMoment/useDate";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";
import { ScrollView } from "react-native";
import { updateScrollAndMoment } from "@utils/scrollCalendarView";

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
  const [countdown, setCountdown] = useState<number | null>(0);
  const [resetProgressKey, setResetProgressKey] = useState(0);

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
    setResetProgressKey((prev) => prev + 1);
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
      setCountdown(0);
      // console.log("Retour sur la màj auto !");
      cleanupTimers();
    }, delay);
  }, [delay]);

  const resetInteractionCooldown = () => {
    setHasInteracted(false);
    setCountdown(0);
    // console.log("Retour sur la màj auto !");
    cleanupTimers();
  };

  useFocusEffect(
    useCallback(() => {
      resetInteractionCooldown();
      return cleanupTimers;
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      if (!hasInteracted) {
        updateScrollAndMoment(
          scrollRef,
          setCurrentIndex,
          setMomentSelected,
          dayOfWeek,
          actualDayMoment
        );
      }
    }, [
      scrollRef,
      setCurrentIndex,
      setMomentSelected,
      hasInteracted,
      dayOfWeek,
      actualDayMoment,
    ])
  );

  useEffect(() => {
    if (!hasInteracted) {
      // stoppe tous les timers existants
      cleanupTimers();
      setCountdown(0);

      // appelle la fonction utilitaire
      updateScrollAndMoment(
        scrollRef,
        setCurrentIndex,
        setMomentSelected,
        dayOfWeek,
        actualDayMoment
      );
    }
  }, [
    hasInteracted,
    scrollRef,
    setCurrentIndex,
    setMomentSelected,
    dayOfWeek,
    actualDayMoment,
  ]);

  useEffect(() => {
    console.log(resetProgressKey)
  }, [resetProgressKey])

  return {
    handleInteraction,
    countdown,
    setHasInteracted,
    resetProgressKey
  };
}
