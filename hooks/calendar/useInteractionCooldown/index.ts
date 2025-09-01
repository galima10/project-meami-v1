import { useState, useRef, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

/**
 * Hook pour gérer l'interaction avec cooldown
 * @param delay temps d'inactivité en ms avant reset
 */
export function useInteractionCooldown(delay = 10000) {
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

  // 🔹 Reset automatique quand l'écran est de nouveau actif
  useFocusEffect(
    useCallback(() => {
      setHasInteracted(false);
      console.log("Retour sur la màj auto !");

      // cleanup si le timeout existait
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, [])
  );

  return { hasInteracted, handleInteraction };
}
