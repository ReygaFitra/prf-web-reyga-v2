import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

export type MyTheme = {
  primary: {
    light: string;
    dark: string;
  };
  secondary: {
    light: string;
    dark: string;
  };
  tertiary: {
    light: string;
    dark: string;
  };
  base: {
    light: string;
    dark: string;
  };
  neutral: {
    light: string;
    dark: string;
  };
};

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const colors: MyTheme = {
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
  styles: {
    global: (props: any) => ({
      body: {
        transition: 'background-color 0.2s ease-in-out', // Menambahkan transisi pada latar belakang (background-color)
        backgroundColor: props.colorMode === 'dark' ? colors.base.dark : colors.base.light,
      },
    }),
  },
});
