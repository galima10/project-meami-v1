// useDate.test.ts

// On mock @utils/getDate

jest.mock("@utils/getDate", () => {
  const actual = jest.requireActual("@utils/getDate");
  return {
    ...actual, // garde getDayMoment
    getDateInfo: jest.fn(),
  };
});

import { renderHook, act } from "@testing-library/react";
import { getDateInfo } from "@utils/getDate";
import { useDate } from "./useDate";
import { useDayMoment } from "./useDayMoment";
import { days } from "@utils/getDate";
import * as useDateModule from "./useDate";
import * as getDateUtils from "@utils/getDate";

// Assure TS que c'est bien un mock
const mockedGetDateInfo = getDateInfo as jest.MockedFunction<
  typeof getDateInfo
>;

describe("useDate", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockedGetDateInfo.mockClear();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("retourne la date initiale avec todayIndex et rawDateInfo", () => {
    mockedGetDateInfo.mockReturnValue({
      dayOfWeek: "lundi",
      dayAndMonth: "01 janvier",
      hour: 10,
    });

    const { result } = renderHook(() => useDate());

    expect(result.current).toEqual({
      dayOfWeek: "lundi",
      dayAndMonth: "01 janvier",
      hour: 10,
      todayIndex: days.findIndex((d) => d === "lundi"),
      refreshDateInfo: expect.any(Function),
      rawDateInfo: {
        dayOfWeek: "lundi",
        dayAndMonth: "01 janvier",
        hour: 10,
      },
    });
  });

  it("met à jour après 1 minute et recalcule todayIndex", async () => {
    let callCount = 0;
    mockedGetDateInfo.mockImplementation(() => {
      callCount++;
      if (callCount === 1)
        return { dayOfWeek: "lundi", dayAndMonth: "01 janvier", hour: 10 };
      return { dayOfWeek: "mardi", dayAndMonth: "02 janvier", hour: 11 };
    });

    const { result } = renderHook(() => useDate());

    act(() => {
      jest.advanceTimersByTime(60 * 1000);
    });

    await act(async () => Promise.resolve());

    expect(result.current.dayOfWeek).toBe("mardi");
    expect(result.current.hour).toBe(11);
    expect(result.current.todayIndex).toBe(
      days.findIndex((d) => d === "mardi")
    );
  });

  it("se met à jour au focus et recalcule todayIndex", async () => {
    let callCount = 0;
    mockedGetDateInfo.mockImplementation(() => {
      callCount++;
      if (callCount === 1)
        return { dayOfWeek: "lundi", dayAndMonth: "01 janvier", hour: 10 };
      return { dayOfWeek: "mercredi", dayAndMonth: "03 janvier", hour: 12 };
    });

    const { result, rerender } = renderHook(() => useDate());

    // simulate focus / refresh
    act(() => result.current.refreshDateInfo());

    // rerender pour forcer la lecture du nouveau state
    rerender();

    expect(result.current.dayOfWeek).toBe("mercredi");
    expect(result.current.hour).toBe(12);
    expect(result.current.todayIndex).toBe(
      days.findIndex((d) => d === "mercredi")
    );
  });
});

describe("useDayMoment", () => {
  it("retourne le bon moment de la journée en fonction de l'heure", () => {
    // Spy sur useDate localement pour ce test
    const useDateSpy = jest.spyOn(useDateModule, "useDate").mockReturnValue({
      dayOfWeek: "lundi",
      dayAndMonth: "01 janvier",
      hour: 10,
      todayIndex: 0, // <- ajouté
      refreshDateInfo: jest.fn(),
      rawDateInfo: {
        dayOfWeek: "lundi",
        dayAndMonth: "01 janvier",
        hour: 10,
      },
    });

    // Spy sur getDayMoment pour que le test soit déterministe
    const getDayMomentSpy = jest
      .spyOn(getDateUtils, "getDayMoment")
      .mockImplementation((hour: number) => {
        if (hour >= 4 && hour < 12) return "morning";
        if (hour >= 12 && hour < 18) return "noon";
        return "evening";
      });

    const { result } = renderHook(() => useDayMoment());

    expect(result.current.actualDayMoment).toBe("morning");
    expect(result.current.displayMoment).toBe("Matin");

    // Restaurer les spies pour ne pas impacter d'autres tests
    useDateSpy.mockRestore();
    getDayMomentSpy.mockRestore();
  });
});
