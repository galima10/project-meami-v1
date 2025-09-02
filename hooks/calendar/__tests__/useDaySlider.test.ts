import { renderHook, act } from "@testing-library/react";
import { useDaySlider } from "../useDaySlider";
import { getScreenWidth } from "@utils/getScreenDimensions";
import { useDate } from "@hooks/dayMoment/useDate";

jest.mock("@hooks/dayMoment/useDate");
jest.mock("@utils/getScreenDimensions");

describe("useDaySlider", () => {
  beforeEach(() => {
    (useDate as jest.Mock).mockReturnValue({ todayIndex: 2 });
    (getScreenWidth as jest.Mock).mockReturnValue(400);
  });

  it("initialise currentIndex avec todayIndex si différent de -1", () => {
    const { result } = renderHook(() => useDaySlider());
    expect(result.current.currentIndex).toBe(2);
  });

  it("initialise currentIndex à 0 si todayIndex est -1", () => {
    (useDate as jest.Mock).mockReturnValue({ todayIndex: -1 });
    const { result } = renderHook(() => useDaySlider());
    expect(result.current.currentIndex).toBe(0);
  });

  it("goToSlide met à jour currentIndex et appelle scrollTo", () => {
    const { result } = renderHook(() => useDaySlider());

    const mockScrollTo = jest.fn();
    result.current.scrollRef.current = { scrollTo: mockScrollTo } as any;

    act(() => result.current.goToSlide(1));

    expect(result.current.currentIndex).toBe(1);
    expect(mockScrollTo).toHaveBeenCalledWith({ x: 400, animated: true });
  });

  it("retourne toutes les valeurs attendues", () => {
    const { result } = renderHook(() => useDaySlider());
    expect(result.current).toHaveProperty("scrollRef");
    expect(result.current).toHaveProperty("days");
    expect(result.current).toHaveProperty("goToSlide");
    expect(result.current).toHaveProperty("todayIndex");
    expect(result.current).toHaveProperty("currentIndex");
    expect(result.current).toHaveProperty("setCurrentIndex");
  });
});
