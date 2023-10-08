import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Text, VStack, useColorModeValue, useDisclosure } from '@chakra-ui/react';
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
  const handleCLickLinks = () => {
    onClose();
  };

  const isDarkMode = useColorModeValue(true, false);

  return (
    <Box>
      <Button rounded="md" onClick={handleCLick} size="md">
        <MenuIcon size="25px" color={isDarkMode ? '#0d21a1' : '#49a078'} />
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="top">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="md" />
          <DrawerBody>
            <Box my="50px">
              <VStack p="30px">
                <NavigationHeading headingSize="md" href="/" title="Home" headingColor={inactiveColor} activeColor={activeColor} />
                {NavLinks.map((link) => {
                  return (
                    <Button onClick={handleCLickLinks} key={link.id} variant="unstyled" width="100%" my="10px">
                      <NavigationLink title={link.title} href={link.href} linkColor={inactiveColor} activeColor={activeColor} paddingY="20px" />
                    </Button>
                  );
                })}
              </VStack>
              <VStack>
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
