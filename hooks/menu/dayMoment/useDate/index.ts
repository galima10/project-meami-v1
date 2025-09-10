import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getDateInfo, days } from "@utils/getDate";

export function useDate() {
  const [dateInfo, setDateInfo] = useState(getDateInfo());

  // Mise à jour immédiate au focus
  useFocusEffect(
    useCallback(() => {
      setDateInfo(getDateInfo());
    }, [])
  );

  const todayIndex = useMemo(() => {
    return days.findIndex((day) => day === dateInfo.dayOfWeek);
  }, [dateInfo.dayOfWeek, days]);

  const refreshDateInfo = useCallback(() => {
    setDateInfo(getDateInfo());
  }, []);

  return {
    ...dateInfo,
    todayIndex,
    refreshDateInfo,
    rawDateInfo: dateInfo,
  };
}
