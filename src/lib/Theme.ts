import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const colors = {
  primary: {
    light: '#0d21a1',
    dark: '#72b01d',
  },
  secondary: {
    light: '#011638',
    dark: '#3f7d20',
  },
  tertiary: {
    light: '#eec643',
    dark: '#f3eff5',
  },
  base: {
    light: '#eef0f2',
    dark: '#212224',
  },
  neutral: {
    light: '#141414',
    dark: '#454955',
  },
};

export const Theme = extendTheme({
  config,
  colors,
});
