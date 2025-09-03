// WaveText.tsx
import { AnimatedAppText } from "@components/atoms/global/Texts";
import { useWaveAnimation } from "@hooks/animations/splashScreen/useWaveAnimation/";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
  View,
} from "react-native";

type WaveTextProps = TextProps & {
  text: string;
  style?: StyleProp<TextStyle>;
};

export default function WaveText({ text, style, ...rest }: WaveTextProps) {
  // Split par mot + espaces
  const words = text.split(/(\s+)/);

  return (
    <View style={styles.container}>
      {words.map((word, wordIndex) => {
        return (
          <View key={wordIndex} style={styles.wordContainer}>
            {word.split("").map((char, charIndex) => {
              const animatedStyle = useWaveAnimation(charIndex + wordIndex * 3);
              // Décalage pour garder l'effet fluide entre mots
              return (
                <AnimatedAppText
                  key={charIndex}
                  {...rest}
                  style={[style, animatedStyle]}
                >
                  {char}
                </AnimatedAppText>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap", // ✅ wrap par mot
    justifyContent: "center",
  },
  wordContainer: {
    flexDirection: "row", // les lettres du mot restent ensemble
    marginVertical: 16,
  },
});
