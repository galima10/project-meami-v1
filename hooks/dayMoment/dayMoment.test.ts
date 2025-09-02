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

  it("retourne la date initiale avec todayIndex", () => {
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
      todayIndex: days.findIndex((d) => d === "lundi"), // <= ajout
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

    expect(result.current).toEqual({
      dayOfWeek: "mardi",
      dayAndMonth: "02 janvier",
      hour: 11,
      todayIndex: days.findIndex((d) => d === "mardi"), // <= vérifie recalcul
    });
  });

  it("se met à jour au focus et recalcule todayIndex", async () => {
    mockedGetDateInfo
      .mockReturnValueOnce({
        dayOfWeek: "lundi",
        dayAndMonth: "01 janvier",
        hour: 10,
      })
      .mockReturnValueOnce({
        dayOfWeek: "mercredi",
        dayAndMonth: "03 janvier",
        hour: 12,
      });

    const { result } = renderHook(() => useDate());

    await act(async () => {});

    expect(result.current).toEqual({
      dayOfWeek: "mercredi",
      dayAndMonth: "03 janvier",
      hour: 12,
      todayIndex: days.findIndex((d) => d === "mercredi"),
    });
  });
});

it("se met à jour au focus", async () => {
  mockedGetDateInfo
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

  await act(async () => {});

  expect(result.current!.hour).toBe(12);
});

describe("useDayMoment", () => {
  it("retourne le bon moment de la journée en fonction de l'heure", () => {
    // ici on peut mocker useDate
    jest.mock("./useDate", () => ({
      useDate: () => ({
        dayOfWeek: "lundi",
        dayAndMonth: "01 janvier",
        hour: 10,
      }),
    }));

    const { result } = renderHook(() => useDayMoment());

    expect(result.current.actualDayMoment).toBe("morning");
    expect(result.current.displayMoment).toBe("Matin");
  });
});
