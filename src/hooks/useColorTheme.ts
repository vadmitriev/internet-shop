import { useCallback, useState } from "react";

export enum COLOR_THEME {
  light = "light",
  dark = "dark",
}

const THEME_QUERY = "(prefers-color-scheme: dark)";

const THEME_KEY = "data-theme";

const prefersTheme = window.matchMedia(THEME_QUERY).matches
  ? COLOR_THEME.dark
  : COLOR_THEME.light;

export const useColorTheme = ({ saveInLocalStorage = true }) => {
  const lcTheme = saveInLocalStorage
    ? localStorage.getItem(THEME_KEY)
    : prefersTheme;
  const initTheme = lcTheme ?? COLOR_THEME.dark;
  const [colorTheme, setColorTheme] = useState(initTheme);
  document.documentElement.setAttribute(THEME_KEY, colorTheme);

  const changeColorTheme = useCallback(
    (theme = "") => {
      const currentTheme = theme === "" ? COLOR_THEME.light : theme;
      setColorTheme(currentTheme);

      if (saveInLocalStorage) {
        localStorage.setItem(THEME_KEY, currentTheme);
      }

      document.documentElement.setAttribute(THEME_KEY, currentTheme);
    },
    [saveInLocalStorage]
  );

  window.matchMedia(THEME_QUERY).addListener((e) => {
    const newTheme = e.matches ? COLOR_THEME.dark : COLOR_THEME.light;
    if (newTheme !== colorTheme) {
      changeColorTheme(newTheme);
    }
  });

  const toggleColorTheme = useCallback(() => {
    colorTheme === COLOR_THEME.light
      ? changeColorTheme(COLOR_THEME.dark)
      : changeColorTheme(COLOR_THEME.light);
  }, [colorTheme, changeColorTheme]);

  return { colorTheme, changeColorTheme, toggleColorTheme };
};
