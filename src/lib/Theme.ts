import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const colors = {
  primary: {
    light: '#0d21a1',
    dark: '#49a078',
  },
  secondary: {
    light: '#011638',
    dark: '#216869',
  },
  tertiary: {
    light: '#ff7b00',
    dark: '#dce1de',
  },
  base: {
    light: '#eef0f2',
    dark: '#1f2421',
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
