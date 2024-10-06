import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb,
} from "@material/material-color-utilities";

export const generateColorScheme = ({
  colorSeed,
  isDark = false,
}: {
  colorSeed: string;
  isDark?: boolean;
}) => {
  const primaryColor = argbFromHex(colorSeed);
  const theme = themeFromSourceColor(primaryColor);
  const themeScheme = theme.schemes[isDark ? "dark" : "light"];

  return {
    primary: hexFromArgb(themeScheme.primary),
    secondary: hexFromArgb(themeScheme.secondary),
    background: hexFromArgb(themeScheme.background),
    surface: hexFromArgb(themeScheme.surface),
    error: hexFromArgb(themeScheme.error),
    onBackground: hexFromArgb(themeScheme.onBackground),
  };
};
