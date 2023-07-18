'use client';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import FooterLink from './FooterLink';
import NextLink from 'next/link';
import { Github, Linkedin, Instagram, Copyright } from 'lucide-react';

const Footer = () => {
  const HorizontalDivider = () => {
    return <Box w="100%" h="3px" bg="#4E4FEB" />;
  };
  const VerticalDivider = () => {
    return <Box h="100%" w="3px" bg="#4E4FEB" />;
  };

  return (
    <Box px="125px" py="20px">
      <VStack>
        <Flex justifyContent="center" gap={3}>
          <FooterLink href="https://github.com/ReygaFitra">
            <Github color="#4E4FEB" />
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/reygafitra24/">
            <Linkedin color="#4E4FEB" />
          </FooterLink>
          <FooterLink href="https://www.instagram.com/reygaaa24/">
            <Instagram color="#4E4FEB" />
          </FooterLink>
        </Flex>
        <Flex alignItems="center" gap={1}>
          <Copyright size="15px" />
          <Text>2023</Text>
          <NextLink href="https://github.com/ReygaFitra" target="_blank">
            <Text color="#068FFF" _hover={{ fontWeight: 'semibold' }}>
              Reyga Fitra Ramadhan
            </Text>
          </NextLink>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Footer;
