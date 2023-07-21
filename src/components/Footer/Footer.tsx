import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import FooterLink from './FooterLink';
import NextLink from 'next/link';
import { Copyright } from 'lucide-react';
import { SocialsFooter } from '@/_data/tsx/Socials';

const Footer = () => {
  return (
    <Box px="125px" py="25px">
      <VStack>
        <Flex justifyContent="center" gap={3}>
          {SocialsFooter.map((social, index) => (
            <FooterLink key={index} href={social.href}>
              {social.icon}
            </FooterLink>
          ))}
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
