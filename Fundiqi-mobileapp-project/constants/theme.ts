/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// src/theme/typography.js

export type HeadingLevel =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body1"
  | "body2"
  | "label"
  | "caption";

export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  bold: "Poppins-Bold",
  semiBold: "Poppins-SemiBold",
};

export const fontSize = {
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,
  body1: 16,
  body2: 14,
  label: 12,
  caption: 10,
  button: 16,
  overline: 12,
};

export const fontWeight = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
};

export const getHeadingStyle = (level: HeadingLevel) => {
  const styles: Record<HeadingLevel, any> = {
    h1: { fontFamily: fontFamily.bold, fontSize: fontSize.h1 },
    h2: { fontFamily: fontFamily.bold, fontSize: fontSize.h2 },
    h3: { fontFamily: fontFamily.bold, fontSize: fontSize.h3 },
    h4: { fontFamily: fontFamily.bold, fontSize: fontSize.h4 },
    body1: { fontFamily: fontFamily.regular, fontSize: fontSize.body1 },
    body2: { fontFamily: fontFamily.regular, fontSize: fontSize.body2 },
    label: { fontFamily: fontFamily.medium, fontSize: fontSize.label },
    caption: { fontFamily: fontFamily.regular, fontSize: fontSize.caption },
  };
  return styles[level];
};

export const colors = {
  primary: "#FFFFFF",
  secondary: "#003B95",
  tertiary: "#006CE4",
  tartary: "#FFC107",

  text: "#000000",
  background: "#F5F5F5",
  border: "#E0E0E0",
  white: "#FFFFFF",
  black: "#000000",
  error: "#FF3B30",
  success: "#34C759",
};
export const Colors = {
  light: {
    ...colors,
    tint: colors.tertiary,
    icon: "#6E6E6E",
    tabIconDefault: "#6E6E6E",
    tabIconSelected: colors.tertiary,
  },
  dark: {
    ...colors,
    text: "#FFFFFF",
    background: "#1C1C1E",
    border: "#3A3A3C",
    tint: colors.tertiary,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: colors.tertiary,
  },
};

export type ColorKey = keyof typeof colors;
