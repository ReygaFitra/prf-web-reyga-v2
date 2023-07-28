import { Flex, HStack, Box, useColorModeValue } from '@chakra-ui/react';
import NavigationHeading from './NavigationHeading';
import NavigationLink from './NavigationLink';
import NavLinks from '@/_data/json/NavLinks.json';
import { Brackets } from 'lucide-react';
import ThemeButton from '../ThemeButton/ThemeButton';
import { Moon, Sun } from 'lucide-react';

const Navigation = () => {
  const navigationColor = useColorModeValue('base.light', 'base.dark');
  const inactiveColor = useColorModeValue('secondary.light', 'secondary.dark');
  const activeColor = useColorModeValue('primary.light', 'primary.dark');
  return (
    <Box pos="sticky" top={0} zIndex={20} bgColor={navigationColor} px="100px">
      <Flex justifyContent="space-between" py="10px">
        <NavigationHeading headingSize="lg" href="/" title={<Brackets size="30px" />} headingColor={inactiveColor} activeColor={activeColor} />
        <HStack alignItems="center" gap={5}>
          {NavLinks.map((link) => {
            return <NavigationLink key={link.id} title={link.title} href={link.href} linkColor={inactiveColor} activeColor={activeColor} dividerOrientation="vertical" dividerHeight={link.dividerHeight} />;
          })}
        </HStack>
        <HStack>
          <ThemeButton sunIcon={<Moon color="#0d21a1" size="25px" />} moonIcon={<Sun color="#49a078" size="25px" />} />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navigation;
