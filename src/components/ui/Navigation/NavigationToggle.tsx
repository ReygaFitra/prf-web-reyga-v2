import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Text, VStack, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { MenuIcon } from 'lucide-react';
import NavigationLink from './NavigationLink';
import NavLinks from '@/_data/json/NavLinks.json';
import NavigationHeading from './NavigationHeading';
import ThemeButton from '../ThemeButton/ThemeButton';

const NavigationToggle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inactiveColor = useColorModeValue('secondary.light', 'secondary.dark');
  const activeColor = useColorModeValue('primary.light', 'primary.dark');

  const handleCLick = () => {
    onOpen();
  };

  return (
    <Box>
      <Button rounded="sm" onClick={handleCLick}>
        <MenuIcon size="30px" />
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="top">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="md" />
          <DrawerBody>
            <Box my="50px">
              <VStack p="30px">
                <NavigationHeading headingSize="md" href="/" title="Home" headingColor={inactiveColor} activeColor={activeColor} />
                <Divider orientation="horizontal" height="25px" />
                {NavLinks.map((link) => {
                  return <NavigationLink key={link.id} title={link.title} href={link.href} linkColor={inactiveColor} activeColor={activeColor} dividerOrientation="horizontal" dividerHeight={link.dividerHeight} />;
                })}
                <ThemeButton dark={<Text color="#0d21a1">Dark Mode</Text>} light={<Text color="#49a078">Light Mode</Text>} />
              </VStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavigationToggle;
