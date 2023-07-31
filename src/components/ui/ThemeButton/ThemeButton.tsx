import { Button, useColorMode } from '@chakra-ui/react';

type ThemeButton = {
  dark: any;
  light: any;
};

const ThemeButton = (props: ThemeButton) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { dark, light } = props;

  return (
    <Button onClick={toggleColorMode} rounded="sm" size="md">
      {colorMode === 'light' ? dark : light}
    </Button>
  );
};

export default ThemeButton;
