import { useCallback, useState } from "react";

const COLOR_THEME = {
  light: "light",
  dark: "dark",
};

const LC_KEY = "theme";

const prefersTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? COLOR_THEME.dark
  : COLOR_THEME.light;

export const useColorTheme = ({ saveInLocalStorage = true }) => {
  const lcTheme = saveInLocalStorage
    ? localStorage.getItem(LC_KEY)
    : prefersTheme;
  const initTheme = lcTheme ?? COLOR_THEME.dark;
  const [colorTheme, setColorTheme] = useState(initTheme);
  document.documentElement.setAttribute("data-theme", colorTheme);

  const changeColorTheme = useCallback(
    (theme = "") => {
      const currentTheme = theme === "" ? COLOR_THEME.light : theme;
      setColorTheme(currentTheme);

      if (saveInLocalStorage) {
        localStorage.setItem(LC_KEY, currentTheme);
      }

      document.documentElement.setAttribute("data-theme", currentTheme);
    },
    [saveInLocalStorage]
  );

  window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
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
