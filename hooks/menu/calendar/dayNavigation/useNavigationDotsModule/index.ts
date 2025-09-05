export function useNavigationDotsModule(goToSlide: (index: number) => void, handleInteraction: () => void, todayIndex: number, setMomentSelected: React.Dispatch<
  React.SetStateAction<"morning" | "noon" | "evening">
>, actualDayMoment: "morning" | "noon" | "evening") {
  const handleDotPress = (index: number) => {
    handleInteraction();
    goToSlide(index);

    if (todayIndex === index) {
      setMomentSelected(actualDayMoment);
    } else {
      setMomentSelected("morning");
    }
  }
  return { handleDotPress };
}
