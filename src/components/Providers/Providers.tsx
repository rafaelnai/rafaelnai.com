import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/Theme";

const Providers: React.FC = ({ children }) => <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;

export default Providers;
