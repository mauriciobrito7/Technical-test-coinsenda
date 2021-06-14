export const colors = {
  black: "#000000",
  white: "#ffffff",
  primary: "#0298ff",
  lightPrimary: "#dbf1ff",
  secondary: "#0d6d63",
  gray: "#cbcbcb",
  red: "#FF3232",
  lightGray: "#eeecec",
  darkGray: "#707070",
  hoverCard: "#f5f8fa",
};

export const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1200px",
  large: "1400px",
};

export const device = {
  mobile: (styles) => {
    return `@media (min-width:${breakpoints.mobile}){
      ${styles}
    }`;
  },
  tablet: (styles) => {
    return `@media (min-width:${breakpoints.tablet}){
      ${styles}
    }`;
  },
  desktop: (styles) => {
    return `@media (min-width:${breakpoints.desktop}){
      ${styles}
    }`;
  },
  large: (styles) => {
    return `@media (min-width:${breakpoints.large}){
      ${styles}
    }`;
  },
  custom: (styles, width) => {
    return `@media (min-width:${width}){
      ${styles}
    }`;
  },
};
