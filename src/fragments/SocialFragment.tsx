'use client';

import { Flex, Box, Text } from '@chakra-ui/react';
import FooterLink from '@/components/Footer/FooterLink';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import TitleSection from '@/components/Title/TitleSection';

const SocialFragment = () => {
  return (
    <>
      <TitleSection width="200px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="Get in Touch" dividerColor="#4E4FEB" />
      <Box my="20px" w="280px">
        <Text fontStyle={'italic'} color="#0E2954" my="10px">
          You can contact me via Socials Bellow :
        </Text>
        <Box bgColor="#0E2954" w="100%" p="2px" style={{ boxShadow: '9px 9px #4E4FEB', overflow: 'hidden' }}>
          <Flex gap={5} my="10px" justifyContent="space-evenly" wrap="wrap">
            <FooterLink href="https://github.com/ReygaFitra">
              <Github color="#ECF8F9" />
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/reygafitra24/">
              <Linkedin color="#ECF8F9" />
            </FooterLink>
            <FooterLink href="https://www.instagram.com/reygaaa24/">
              <Instagram color="#ECF8F9" />
            </FooterLink>
            <FooterLink href="https://web.facebook.com/reyga.fitraramadhan.1/">
              <Facebook color="#ECF8F9" />
            </FooterLink>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default SocialFragment;
