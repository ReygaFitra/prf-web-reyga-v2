'use client';

import { Flex, Box, Text } from '@chakra-ui/react';
import FooterLink from '@/components/Footer/FooterLink';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import TitleSection from '@/components/Title/TitleSection';

const SocialFragment = () => {
  return (
    <>
      <TitleSection width="200px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="Get in Touch" dividerColor="#4E4FEB" />
      <Box my="20px">
        <Text fontStyle={'italic'} color="#0E2954" my="2px">
          You can contact me via Socials Bellow :
        </Text>
        <Flex gap={5} my="10px">
          <FooterLink href="https://github.com/ReygaFitra">
            <Github color="#4E4FEB" />
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/reygafitra24/">
            <Linkedin color="#4E4FEB" />
          </FooterLink>
          <FooterLink href="https://www.instagram.com/reygaaa24/">
            <Instagram color="#4E4FEB" />
          </FooterLink>
          <FooterLink href="https://web.facebook.com/reyga.fitraramadhan.1/">
            <Facebook color="#4E4FEB" />
          </FooterLink>
        </Flex>
      </Box>
    </>
  );
};

export default SocialFragment;
