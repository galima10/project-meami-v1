import { getDateInfo } from "@utils/getDate";
import { useState, useEffect } from "react";

export function useDate() {
  const [dateInfo, setDateInfo] = useState(getDateInfo());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateInfo(getDateInfo());
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return dateInfo;
}
