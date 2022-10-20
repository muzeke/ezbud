import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;

    fontSize: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      heading: string;
    };
    borderRadius: string;
    animation: {
      easing: string; // cubic-bezier(0.645,0.045,0.355,1)
      transition: string; // all 0.25s cubic-bezier(0.645,0.045,0.355,1)
    };

    color: {
      primary: string;
      secondary: string;
      background?: string;
      text?: string;
      border?: string;

      red: string;
      green: string;
      grey: string;
      blue: string;
      white: string;
    };

    lineHeights?: {
      sm: string;
      md: string;
      lg: string;
    };

    boxShadow?: {
      light: string;
      dark: string;
    };

    polishedLevels: numbers[];
  }
}
