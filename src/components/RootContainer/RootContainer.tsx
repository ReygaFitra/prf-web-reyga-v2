import { Box } from '@chakra-ui/react';

type RootContainer = {
  children: React.ReactNode;
  bgColor: string;
  fontFamily: string;
};

const RootContainer = (props: RootContainer) => {
  const { children, bgColor, fontFamily } = props;
  return (
    <Box bgColor={bgColor} fontFamily={fontFamily}>
      {children}
    </Box>
  );
};

export default RootContainer;
