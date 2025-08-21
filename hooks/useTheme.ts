import { useMemo } from "react";
import theme, { ThemeType } from "@themes/index";

export function useTheme(): ThemeType {
  return useMemo(() => theme.properties, []);
}