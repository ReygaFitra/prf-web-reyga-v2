import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const colors = {
  primary: {
    light: '#0d21a1',
  },
  secondary: {
    light: '#011638',
  },
  tertiary: {
    light: '#eec643',
  },
  base: {
    light: '#eef0f2',
  },
  neutral: {
    light: '#141414',
  },
};

export const Theme = extendTheme({
  config,
  colors,
});
