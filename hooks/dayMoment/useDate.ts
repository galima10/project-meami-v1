import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getDateInfo, days } from "@utils/getDate";

export function useDate() {
  const [dateInfo, setDateInfo] = useState(getDateInfo());
  const intervalRef = useRef<number | null>(null);

  const startMinuteInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    // déclenche la première update exactement au début de la prochaine minute
    const timeout = setTimeout(() => {
      setDateInfo(getDateInfo());

      // ensuite update toutes les 60 secondes
      intervalRef.current = setInterval(() => {
        setDateInfo(getDateInfo());
      }, 60 * 1000);
    }, msUntilNextMinute);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // start interval au montage
  useEffect(() => {
    const cleanup = startMinuteInterval();
    return cleanup;
  }, [startMinuteInterval]);

  // Mise à jour immédiate au focus
  useFocusEffect(
    useCallback(() => {
      setDateInfo(getDateInfo());
      startMinuteInterval(); // relance l’intervalle à 0
    }, [startMinuteInterval])
  );

  const todayIndex = useMemo(() => {
    return days.findIndex((day) => day === dateInfo.dayOfWeek);
  }, [dateInfo.dayOfWeek, days]);

  const refreshDateInfo = useCallback(() => {
    setDateInfo(getDateInfo());
    console.log("Date info refreshed", getDateInfo());
    startMinuteInterval(); // relance l’intervalle à 0
  }, [startMinuteInterval]);

  return {
    ...dateInfo,
    todayIndex,
    refreshDateInfo,
    rawDateInfo: dateInfo,
  };
}
