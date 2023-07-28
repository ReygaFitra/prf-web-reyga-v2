import { Box, useColorModeValue } from '@chakra-ui/react';

type Horizontal = {
  width: string;
  height: string;
};

type Vertical = {
  width: string;
  height: string;
};

export const HorizontalDivider = (props: Horizontal) => {
  const tertiaryColor = useColorModeValue('tertiary.light', 'tertiary.dark');
  const { width, height } = props;
  return <Box w={width} h={height} bg={tertiaryColor} />;
};
export const VerticalDivider = (props: Vertical) => {
  const tertiaryColor = useColorModeValue('tertiary.light', 'tertiary.dark');
  const { width, height } = props;
  return <Box w={width} h={height} bg={tertiaryColor} />;
};
