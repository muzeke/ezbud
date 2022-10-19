import { DefaultTheme } from 'styled-components';

const defaultColors = {
  primary: `#012030`,
  secondary: `#13678A`,
  background: `#fff`,
  text: `#012030`,
  border: `#13678A`,
  slate: '#8C8C8C',
  lightSlate: '#A6A6A6',
  lighterSlate: '#BFBFBF',
  lightestSlate: '#D9D9D9',
};

export const themeDefault: DefaultTheme = {
  fontFamily: 'Poppins',
  borderRadius: '.45rem',
  animation: {
    easing: 'cubic-bezier(0.645,0.045,0.355,1)',
    transition: 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
  },
  fontSize: {
    xxs: '1.2rem',
    xs: '1.3rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
    xl: '2rem',
    xxl: '2.2rem',
    heading: '2.4rem',
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
};

export const light = {
  color: {
    primary: `#012030`,
    secondary: `#13678A`,
    background: `#fff`,
    text: `#012030`,
    border: `#13678A`,
    slate: '#8C8C8C',
    lightSlate: '#A6A6A6',
    lighterSlate: '#BFBFBF',
    lightestSlate: '#D9D9D9',
  },
};

export const dark = {
  color: {
    primary: `#fff`,
    secondary: `#13678A`,
    background: `#012030`,
    text: `#012030`,
    border: `#13678A`,
  },
};

export const theme = { ...themeDefault, ...light };
