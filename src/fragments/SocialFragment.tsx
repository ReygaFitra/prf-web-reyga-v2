import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import FooterLink from '@/components/ui/Footer/FooterLink';
import TitleSection from '@/components/ui/Title/TitleSection';
import ContactForm from '@/components/ui/ContactForm/ContactForm';
import Frame from '@/components/ui/Frame/Frame';
import { Socials } from '@/_data/tsx/Socials';

const SocialFragment = () => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');

  return (
    <>
      <TitleSection width="200px" headingSize="lg" headingColor={primaryColor} headingFont="Changa" name="Get in Touch" />
      <Flex justifyContent="space-between">
        <Box my="20px" w="280px">
          <Text fontStyle={'italic'} color={secondaryColor} my="10px">
            You can contact me via Socials Bellow :
          </Text>
          <Frame bgColor={secondaryColor} maxW="100%" maxH="100%" rounded="none" boxShadow="9px 9px #454955" overflow="hidden">
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

export default SocialFragment;
