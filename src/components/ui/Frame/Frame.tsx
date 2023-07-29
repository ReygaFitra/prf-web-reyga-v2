import { Box } from '@chakra-ui/react';

type Frame = {
  minW?: string;
  minH?: string;
  maxW?: string;
  maxH?: string;
  w?: string;
  h?: string;
  rounded: string;
  m?: string;
  my?: string;
  mx?: string;
  bgColor: string;
  p?: string;
  py?: string;
  px?: string;
  boxShadow: { shadow: string; color: any };
  overflow?: string;
  children: React.ReactNode;
};

const Frame = (props: Frame) => {
  const { minW, minH, maxW, maxH, w, h, rounded, m, my, mx, bgColor, p, py, px, boxShadow, overflow, children } = props;
  return (
    <Box maxW={maxW} maxH={maxH} minW={minW} minH={minH} w={w} h={h} rounded={rounded} m={m} my={my} mx={mx} bgColor={bgColor} p={p} py={py} px={px} boxShadow={`${boxShadow.shadow} ${boxShadow.color}`} overflow={overflow}>
      {children}
    </Box>
  );
};

export default Frame;
