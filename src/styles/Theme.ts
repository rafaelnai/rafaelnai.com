import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  background: {
    primary: "#ffffff",
    secondary: "#ffffff",
  },
};

export const lightTheme: DefaultTheme = {
  ...defaultTheme,
  background: {
    primary: "#ffffff",
    secondary: "#ffffff",
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  background: {
    primary: "#262626",
    secondary: "#262626",
  },
};
