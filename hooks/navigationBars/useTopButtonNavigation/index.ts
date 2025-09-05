import { usePathname } from "expo-router";

interface UseTopButtonProps {
  routeName?: string;
}

export function useTopButtonNavigation({ routeName }: UseTopButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === `/${routeName}`;

  return { isActive };
}
