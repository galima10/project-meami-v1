import { createContext, useContext } from "react";

export const MenuContext = createContext<any>(null);

export const useMenu = () => useContext(MenuContext);