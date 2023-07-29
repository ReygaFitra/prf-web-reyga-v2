import { Flex, Box, Text, useColorModeValue, useColorMode } from '@chakra-ui/react';
import FooterLink from '@/components/ui/Footer/FooterLink';
import TitleSection from '@/components/ui/Title/TitleSection';
import ContactForm from '@/components/ui/ContactForm/ContactForm';
import Frame from '@/components/ui/Frame/Frame';
import { Socials } from '@/_data/tsx/Socials';
import { Theme } from '@/lib/Theme';

const Social = () => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');

  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const boxShadowColor = isDarkMode ? Theme.colors.primary.dark : Theme.colors.primary.light;

  return (
    <>
      <TitleSection width="200px" headingSize="lg" headingColor={primaryColor} headingFont="Changa" name="Get in Touch" />
      <Flex justifyContent="space-between">
        <Box my="20px" w="280px">
          <Text fontStyle={'italic'} color={secondaryColor} my="10px">
            You can contact me via Socials Bellow :
          </Text>
          <Frame bgColor={secondaryColor} maxW="100%" maxH="100%" rounded="none" boxShadow={{ shadow: '10px 10px', color: boxShadowColor }} overflow="hidden">
            <Flex gap={5} my="10px" justifyContent="space-evenly" wrap="wrap">
              {Socials.map((social, index) => (
                <FooterLink key={index} href={social.href}>
                  {social.icon}
                </FooterLink>
              ))}
            </Flex>
          </Frame>
        </Box>
        <Box>
          <ContactForm />
        </Box>
      </Flex>
    </>
  );
};

export default Social;
