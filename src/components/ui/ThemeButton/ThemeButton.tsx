import { Button, useColorMode } from '@chakra-ui/react';

type ThemeButton = {
  sunIcon: any;
  moonIcon: any;
};

const ThemeButton = (props: ThemeButton) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { sunIcon, moonIcon } = props;

  return (
    <Button onClick={toggleColorMode} rounded="sm">
      {colorMode === 'light' ? sunIcon : moonIcon}
    </Button>
  );
};

export default ThemeButton;
