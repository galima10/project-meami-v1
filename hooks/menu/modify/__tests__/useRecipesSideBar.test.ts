import { renderHook, act } from "@testing-library/react";
import { useRecipesSideBar } from "../useRecipesSideBar";
import { ScrollView } from "react-native";

describe("useRecipesSideBar", () => {
  let setIsDarkScreenVisible: jest.Mock;
  let setMomentSelected: jest.Mock;

  beforeEach(() => {
    setIsDarkScreenVisible = jest.fn();
    setMomentSelected = jest.fn();
  });

  it("should start with step = 1", () => {
    const { result } = renderHook(() =>
      useRecipesSideBar(setIsDarkScreenVisible, setMomentSelected, undefined)
    );

    expect(result.current.step).toBe(1);
  });

  it("should update step when setStep is called", () => {
    const { result } = renderHook(() =>
      useRecipesSideBar(setIsDarkScreenVisible, setMomentSelected, undefined)
    );

    act(() => {
      result.current.setStep(2);
    });

    expect(result.current.step).toBe(2);
  });

  it("should call setIsDarkScreenVisible(false) and setMomentSelected(undefined) when handleCloseAndReturn called at step 1", () => {
    const { result } = renderHook(() =>
      useRecipesSideBar(setIsDarkScreenVisible, setMomentSelected, "Matin")
    );

    act(() => {
      result.current.handleCloseAndReturn();
    });

    expect(setIsDarkScreenVisible).toHaveBeenCalledWith(false);
    expect(setMomentSelected).toHaveBeenCalledWith(undefined);
  });

  it("should return to step 1 if step = 2 and momentSelected != 'Matin'", () => {
    const { result } = renderHook(() =>
      useRecipesSideBar(setIsDarkScreenVisible, setMomentSelected, "Soir")
    );

    act(() => {
      result.current.setStep(2);
    });

    act(() => {
      result.current.handleCloseAndReturn();
    });

    expect(result.current.step).toBe(1);
    expect(setIsDarkScreenVisible).not.toHaveBeenCalled(); // car pas handleClose
  });

  it("should scroll to top when handleReturn is called", () => {
    const scrollToMock = jest.fn();
    const { result } = renderHook(() =>
      useRecipesSideBar(setIsDarkScreenVisible, setMomentSelected, "Soir")
    );

    // simule ref attachée avec scrollTo
    (result.current.scrollRef.current as unknown as ScrollView) = {
      scrollTo: scrollToMock,
    } as any;

    act(() => {
      result.current.setStep(2);
    });

    act(() => {
      result.current.handleCloseAndReturn();
    });

    expect(scrollToMock).toHaveBeenCalledWith({
      y: 0,
      x: 0,
      animated: true,
    });
  });
});
