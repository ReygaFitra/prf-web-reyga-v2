import { Flex, HStack, Box, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';
import NavigationHeading from './NavigationHeading';
import NavigationLink from './NavigationLink';
import NavLinks from '@/_data/json/NavLinks.json';
import { Brackets } from 'lucide-react';
import ThemeButton from '../ThemeButton/ThemeButton';
import { Moon, Sun } from 'lucide-react';
import NavigationToggle from './NavigationToggle';

const Navigation = () => {
  const navigationColor = useColorModeValue('base.light', 'base.dark');
  const inactiveColor = useColorModeValue('secondary.light', 'secondary.dark');
  const activeColor = useColorModeValue('primary.light', 'primary.dark');

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <>
      {!isMobile ? (
        <Box pos="sticky" top={0} zIndex={20} bgColor={navigationColor} px="100px">
          <Flex justifyContent="space-between" py="10px">
            <NavigationHeading headingSize="lg" href="/" title={<Brackets size="30px" />} headingColor={inactiveColor} activeColor={activeColor} />
            <HStack alignItems="center" gap={5}>
              {NavLinks.map((link) => {
                return <NavigationLink key={link.id} title={link.title} href={link.href} linkColor={inactiveColor} activeColor={activeColor} dividerOrientation="vertical" dividerHeight={link.dividerHeight} />;
              })}
            </HStack>
            <HStack>
              <ThemeButton dark={<Moon color="#0d21a1" size="25px" />} light={<Sun color="#49a078" size="25px" />} />
            </HStack>
          </Flex>
        </Box>
      ) : null}

      {isMobile ? (
        <Box pos="sticky" top={0} zIndex={20} bgColor={navigationColor} px="20px">
          <Box display="flex" justifyContent="end" my="10px">
            <NavigationToggle />
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default Navigation;
