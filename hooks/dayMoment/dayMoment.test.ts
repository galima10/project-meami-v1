// useDate.test.ts
import { renderHook, act } from "@testing-library/react";
import { getDateInfo } from "@utils/getDate";
import { useDate } from "./useDate";
import { useDayMoment } from "./useDayMoment";

// On mock @utils/getDate
jest.mock("@utils/getDate", () => {
  const actual = jest.requireActual("@utils/getDate");
  return {
    ...actual, // garde les vraies fonctions
    getDateInfo: jest.fn(), // mock seulement celle-ci
  };
});

// On mock useFocusEffect de React Navigation
jest.mock("@react-navigation/native", () => ({
  useFocusEffect: (cb: any) => {
    // Simule le comportement normal : callback exécuté APRES le render
    const React = require("react");
    React.useEffect(cb, []);
  },
}));

describe("useDate", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    (getDateInfo as jest.Mock).mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("retourne la date initiale", () => {
    (getDateInfo as jest.Mock).mockReturnValue({
      dayOfWeek: "lundi",
      dayAndMonth: "01 janvier",
      hour: 10,
    });

    const { result } = renderHook(() => useDate());

    expect(result.current).toEqual({
      dayOfWeek: "lundi",
      dayAndMonth: "01 janvier",
      hour: 10,
    });
  });

  it("met à jour après 1 minute", () => {
    (getDateInfo as jest.Mock)
      .mockReturnValueOnce({
        dayOfWeek: "lundi",
        dayAndMonth: "01 janvier",
        hour: 10,
      })
      .mockReturnValueOnce({
        dayOfWeek: "lundi",
        dayAndMonth: "01 janvier",
        hour: 11,
      });

    const { result } = renderHook(() => useDate());

    // avance le temps de 1 min
    act(() => {
      jest.advanceTimersByTime(60 * 1000);
    });

    expect(result.current.hour).toBe(11);
  });

  it("se met à jour au focus", () => {
    (getDateInfo as jest.Mock)
      .mockReturnValueOnce({
        dayOfWeek: "lundi",
        dayAndMonth: "01 janvier",
        hour: 10,
      })
      .mockReturnValueOnce({
        dayOfWeek: "lundi",
        dayAndMonth: "01 janvier",
        hour: 12,
      });

    const { result } = renderHook(() => useDate());

    // Comme on a mock useFocusEffect pour exécuter direct le callback,
    // le hook doit déjà avoir recalculé
    expect(result.current.hour).toBe(12);
  });
});

// On mock useDate pour contrôler l'heure
jest.mock("./useDate", () => ({
  useDate: jest.fn(),
}));

describe("useDayMoment", () => {
  it("retourne le bon moment de la journée en fonction de l'heure", () => {
    (useDate as jest.Mock).mockReturnValue({
      dayOfWeek: "lundi",
      dayAndMonth: "01 janvier",
      hour: 10,
    });

    const { result } = renderHook(() => useDayMoment());

    expect(result.current.actualDayMoment).toBe("morning");
    expect(result.current.displayMoment).toBe("Matin");
  });
});
