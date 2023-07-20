'use client';
import { Text, Heading, Flex, VStack, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { TypeAnimation } from 'react-type-animation';

type Hero = {
  name: string;
  nameColor: string;
  nameFont: string;
  roleColor: string;
  roleSequence: any[];
};

const Hero = (props: Hero) => {
  const { name, nameColor, nameFont, roleColor, roleSequence } = props;

  return (
    <Flex justifyContent="center">
      <VStack>
        <Heading color={nameColor} fontFamily={nameFont} fontWeight="semibold">
          {name}
        </Heading>
        <Text color={roleColor}>
          <TypeAnimation sequence={roleSequence} style={{ fontSize: '1.5em' }} repeat={Infinity} />
        </Text>
        <NextLink href="/about">
          <Button variant="outline" size="md" alignItems="center" color="#4E4FEB" borderRadius="sm">
            About
          </Button>
        </NextLink>
      </VStack>
    </Flex>
  );
};

export default Hero;
