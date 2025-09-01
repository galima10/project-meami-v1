import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getDateInfo } from "@utils/getDate";

export function useDate() {
  const [dateInfo, setDateInfo] = useState(getDateInfo());

  // Mise à jour automatique toutes les minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setDateInfo(getDateInfo());
    }, 10 * 1000);

    return () => clearInterval(interval);
  }, []);

  // Mise à jour immédiate au focus du screen
  useFocusEffect(
    useCallback(() => {
      setDateInfo(getDateInfo());
    }, []) // pas de dépendances, fonction stable
  );

  return dateInfo;
}
