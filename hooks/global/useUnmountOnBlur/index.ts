// hooks/useUnmountOnBlur.ts
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export function useUnmountOnBlur(
  onFocus: () => void | (() => void),
  onBlur?: () => void
) {
  useFocusEffect(
    useCallback(() => {
      const cleanupFromFocus = onFocus?.(); // ← capture le return

      return () => {
        cleanupFromFocus?.(); // ← exécute le cleanup
        onBlur?.();           // ← ton callback blur
      };
    }, [onFocus, onBlur])
  );
}
