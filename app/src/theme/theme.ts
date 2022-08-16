import { createTheme, ThemeOptions } from "@mui/material/styles";
import darkTheme from "./dark";
import lightTheme from "./light";

const themeMap: { [key: string]: ThemeOptions } = {
  dark: darkTheme,
  light: lightTheme,
};

// Create a theme instance.
const theme = createTheme(themeMap["light"]);

export default theme;
