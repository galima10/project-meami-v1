import { useState, useEffect, useCallback, useMemo } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getDateInfo } from "@utils/getDate";
import { days } from "@utils/getDate";

export function useDate() {
  const [dateInfo, setDateInfo] = useState(getDateInfo());

  // Mise à jour automatique toutes les minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setDateInfo(getDateInfo());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // Mise à jour immédiate au focus du screen
  useFocusEffect(
    useCallback(() => {
      setDateInfo(getDateInfo());
    }, []) // pas de dépendances, fonction stable
  );

  const todayIndex = useMemo(() => {
    return days.findIndex((day) => day === dateInfo.dayOfWeek);
  }, [dateInfo.dayOfWeek, days]);

  return { ...dateInfo, todayIndex };
}
