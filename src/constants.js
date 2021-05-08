export const COLORS = {
  white: "0deg 0% 100%",
  gray: {
    100: "185deg 5% 95%",
    300: "190deg 5% 80%",
    500: "196deg 4% 60%",
    700: "220deg 5% 40%",
    900: "220deg 3% 20%",
  },
  primary: "340deg 65% 47%",
  secondary: "240deg 60% 63%",
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

// Desktop-first.
export const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `${BREAKPOINTS.phoneMax / 16}rem`,
  tabletAndSmaller: `${BREAKPOINTS.tabletMax / 16}rem`,
  laptopAndSmaller: `${BREAKPOINTS.laptopMax / 16}rem`,
};
