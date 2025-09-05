import { usePathname } from "expo-router";

export function useTabButton(routeName: string) {
  const pathname = usePathname();

  const firstSegmentOfActualRoute = pathname.split("/")[1];
  const firstSegmentOfRouteName = routeName.split("/")[0];

  const isActive = firstSegmentOfActualRoute === firstSegmentOfRouteName;

  return { isActive };
}
