import { Stack } from "expo-router";
import { useState } from "react";
import { MenuContext } from "@contexts/MenuContext";
import { mockedMenu } from "@constants/mockedMenu";

export default function MenuViewLayout() {
  const [menu, setMenu] = useState(mockedMenu);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      <Stack screenOptions={{ headerShown: false }} />
    </MenuContext.Provider>
  );
}
