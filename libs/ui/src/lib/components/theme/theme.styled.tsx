import { DefaultTheme } from 'styled-components';

const defaultColors = {
  primary: `#F7882F`,
  secondary: `#F7C331`,
  background: `#fff`,
  text: `#242a31`,
  border: `#13678A`,

  // grey
  grey: '#6B7A8F',

  // red
  red: '#eb3838',

  // green
  green: '#58c112',

  // blue
  blue: '#1573ca',

  //white
  white: '#fff',
};

export const themeDefault: DefaultTheme = {
  fontFamily: 'Poppins',
  borderRadius: '.45rem',
  animation: {
    easing: 'cubic-bezier(0.645,0.045,0.355,1)',
    transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
  },
  fontSize: {
    xxs: '12px',
    xs: '14px',
    sm: '18px',
    md: '20px',
    lg: '24px',
    xl: '28px',
    xxl: '30px',
    heading: '32px',
  },
  lineHeights: {
    sm: '1px',
    md: '1.25px',
    lg: '1.5px',
  },

  boxShadow: {
    light: '0 5px 15px rgba(0,0,0,0.1)',
    dark: '0 5px 15px rgba(0,0,0,0.2)',
  },

  color: defaultColors,

  polishedLevels: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
};

export const light = {
  color: {
    primary: `#13678A`,
    secondary: `#012030`,
    background: `#fff`,
    text: `#012030`,
    border: `#13678A`,
  },
};
export const greeny = {
  color: {
    primary: `#317302`,
    secondary: `#A9BF04`,
    background: `#fff`,
    text: `#154001`,
    border: `#13678A`,
    // grey
    grey: '#6B7A8F',

    // red
    red: '#eb3838',

    // green
    green: '#58c112',

    // blue
    blue: '#1573ca',
    //
    white: '#fff',
  },

  polishedLevels: [0.19, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
};
export const citrus = {
  color: {
    primary: `#F7882F`,
    secondary: `#F7C331`,
    background: `#fff`,
    text: `#242a31`,
    border: `#13678A`,

    // grey
    grey: '#6B7A8F',

    // red
    red: '#eb3838',

    // green
    green: '#58c112',

    // blue
    blue: '#1573ca',
    //
    white: '#fff',
  },

  polishedLevels: [0.19, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
};

export const aqua = {
  color: {
    primary: `#316570`,
    secondary: `#3FC0DD`,
    background: `#fff`,
    text: `#1a4c57`,
    border: `#13678A`,

    // grey
    grey: '#6B7A8F',

    // red
    red: '#eb3838',

    // green
    green: '#58c112',

    // blue
    blue: '#1573ca',
    //
    white: '#fff',
  },

  polishedLevels: [0.19, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
};
const themeArray = [aqua, greeny, citrus];

Math.random();

export const theme = {
  ...themeDefault,
  ...themeArray[Math.floor(Math.random() * 3)],
};
