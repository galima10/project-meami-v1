import { renderHook } from "@testing-library/react";
import { useMomentBand } from "../useMomentBand";
import { useDayMoment } from "@hooks/dayMoment/useDayMoment";

jest.mock("@hooks/dayMoment/useDayMoment");

describe("useMomentBand", () => {
  beforeEach(() => {
    (useDayMoment as jest.Mock).mockReturnValue({
      actualDayMoment: "noon",
    });
  });

  it("utilise momentSelected si index === currentIndex", () => {
    const { result } = renderHook(() =>
      useMomentBand({
        momentSelected: "evening",
        day: "Lundi",
        index: 1,
        currentIndex: 1,
        todayIndex: 0,
      })
    );

    expect(result.current.momentLabel).toBe("Soir");
    expect(result.current.key).toBe("lundi_evening");
  });

  it("utilise actualDayMoment si index === todayIndex", () => {
    const { result } = renderHook(() =>
      useMomentBand({
        momentSelected: "morning",
        day: "Mardi",
        index: 0,
        currentIndex: 2,
        todayIndex: 0,
      })
    );

    expect(result.current.momentLabel).toBe("Midi"); // actualDayMoment = "noon"
    expect(result.current.key).toBe("mardi_noon");
  });

  it("retourne 'morning' par défaut si index != currentIndex et != todayIndex", () => {
    const { result } = renderHook(() =>
      useMomentBand({
        momentSelected: "evening",
        day: "Mercredi",
        index: 1,
        currentIndex: 0,
        todayIndex: 2,
      })
    );

    expect(result.current.momentLabel).toBe("Matin");
    expect(result.current.key).toBe("mercredi_morning");
  });
});
