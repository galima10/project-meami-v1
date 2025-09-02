import { useState, useRef, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { days } from "@utils/getDate";
import { getScreenWidth } from "@utils/getScreenDimensions";
import { useDate } from "@hooks/dayMoment/useDate";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";
import { ScrollView } from "react-native";

/**
 * Hook pour gérer l'interaction avec cooldown
 * @param delay temps d'inactivité en ms avant reset
 */

interface UseInteractionCooldownParams {
  delay?: number;
  setMomentSelected: (moment: any) => void;
  setCurrentIndex: (index: number) => void;
  scrollRef: React.RefObject<ScrollView | null>;
}
export function useInteractionCooldown({
  delay = 10000,
  setMomentSelected,
  setCurrentIndex,
  scrollRef,
}: UseInteractionCooldownParams) {
  const { dayOfWeek } = useDate();
  const { actualDayMoment } = useDayMoment();
  const [hasInteracted, setHasInteracted] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleInteraction = useCallback(() => {
    setHasInteracted(true);
    console.log("Interaction détectée !");

    // reset le timeout si déjà existant
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // crée un nouveau timeout
    timeoutRef.current = setTimeout(() => {
      setHasInteracted(false);
      console.log("Retour sur la màj auto !");
      timeoutRef.current = null;
    }, delay);
  }, [delay]);

  const resetInteractionCooldown = () => {
    setHasInteracted(false);
    console.log("Retour sur la màj auto !");
  };

  const cleanupTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
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

  // 🔹 Reset automatique quand l'écran est de nouveau actif
  useFocusEffect(
    useCallback(() => {
      resetInteractionCooldown();
      return cleanupTimeout;
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

  return { handleInteraction };
}
