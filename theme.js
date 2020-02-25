import { theme } from "@chakra-ui/core";

export default {
    ...theme,
    breakpoints: ["30em", "48em", "62em", "80em"],
    fonts: {
      heading: '"Avenir Next", sans-serif',
      body: "system-ui, sans-serif",
      mono: "Menlo, monospace",
    },
    fonts: {
      ...theme.fonts,
      nunito: "Nunito", 
    },
    fontSizes: {
      ...theme.fontSizes,
      xs: "11px",
      sm: "12px",
      xsm: "14px",
      md: "15px",
      xmd: "17px",
      lg: "18px",
      xl: "24px",
      xxl: "38px",
      xxxl: "45px",
      fxl: "8rem",
    },
    colors: {
      ...theme.colors,
      purple: "#7021a6",
      darkPurple: "#480175",
      teal: "#00DBDB",
      darkGray: "#333333",
      lightGray: "#f5f6f7"
    },
    shadows: {
      ...theme.shadows,
      bg: "0px 15px 15px #ccc",
      sm: "0 0 30px #444",
    }
  };

