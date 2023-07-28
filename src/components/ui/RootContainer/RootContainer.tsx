import { Box, useColorModeValue } from '@chakra-ui/react';

type RootContainer = {
  children: React.ReactNode;
  fontFamily: string;
};

const RootContainer = (props: RootContainer) => {
  const { children, fontFamily } = props;
  const baseColor = useColorModeValue('base.light', 'base.dark');
  return (
    <Box fontFamily={fontFamily} m="auto" w="full" h="full" minH="100vh" display="flex" flexDirection="column" justifyContent="space-between" bgColor={baseColor}>
      {children}
    </Box>
  );
};

export default RootContainer;
