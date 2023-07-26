import { Box } from '@chakra-ui/react';

type Horizontal = {
  width: string;
  height: string;
};

type Vertical = {
  width: string;
  height: string;
};

export const HorizontalDivider = (props: Horizontal) => {
  const { width, height } = props;
  return <Box w={width} h={height} bg="tertiary.light" />;
};
export const VerticalDivider = (props: Vertical) => {
  const { width, height } = props;
  return <Box w={width} h={height} bg="tertiary.light" />;
};
