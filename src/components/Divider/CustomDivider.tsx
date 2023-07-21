import { Box } from '@chakra-ui/react';

type Horizontal = {
  width: string;
  height: string;
  color: string;
};

type Vertical = {
  width: string;
  height: string;
  color: string;
};

export const HorizontalDivider = (props: Horizontal) => {
  const { width, height, color } = props;
  return <Box w={width} h={height} bg={color} />;
};
export const VerticalDivider = (props: Vertical) => {
  const { width, height, color } = props;
  return <Box w={width} h={height} bg={color} />;
};
