import { renderHook } from '@testing-library/react';
import { useNavigationDotsModule } from '../dayNavigation/useCalendarNavigationDotsModule';

describe('useNavigationDotsModule', () => {
  let goToSlideMock: jest.Mock;
  let handleInteractionMock: jest.Mock;
  let setMomentSelectedMock: jest.Mock;
  const todayIndex = 2;
  const actualDayMoment: 'morning' | 'noon' | 'evening' = 'noon';

  beforeEach(() => {
    goToSlideMock = jest.fn();
    handleInteractionMock = jest.fn();
    setMomentSelectedMock = jest.fn();
  });

  it('should call handleInteraction, goToSlide, and setMomentSelected correctly when index === todayIndex', () => {
    const { result } = renderHook(() =>
      useNavigationDotsModule(
        goToSlideMock,
        handleInteractionMock,
        todayIndex,
        setMomentSelectedMock,
        actualDayMoment
      )
    );

    result.current.handleDotPress(todayIndex);

    expect(handleInteractionMock).toHaveBeenCalledTimes(1);
    expect(goToSlideMock).toHaveBeenCalledWith(todayIndex);
    expect(setMomentSelectedMock).toHaveBeenCalledWith(actualDayMoment);
  });

  it('should set momentSelected to "morning" when index !== todayIndex', () => {
    const { result } = renderHook(() =>
      useNavigationDotsModule(
        goToSlideMock,
        handleInteractionMock,
        todayIndex,
        setMomentSelectedMock,
        actualDayMoment
      )
    );

    const newIndex = 1;
    result.current.handleDotPress(newIndex);

    expect(handleInteractionMock).toHaveBeenCalledTimes(1);
    expect(goToSlideMock).toHaveBeenCalledWith(newIndex);
    expect(setMomentSelectedMock).toHaveBeenCalledWith('morning');
  });
});
