import { useState, useEffect } from "react";

export default function useMomentBand(
  momentSelected: "morning" | "noon" | "evening"
) {

  const momentMap = {
    morning: "Matin",
    noon: "Midi",
    evening: "Soir",
  } as const;

  const [moment, setMoment] = useState<"Matin" | "Midi" | "Soir">(
    momentMap[momentSelected]
  );

  useEffect(() => {
    setMoment(momentMap[momentSelected]);
  }, [momentSelected]);

  return moment;
}
