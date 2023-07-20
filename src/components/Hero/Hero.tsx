'use client';
import { Text, Heading, Flex, VStack } from '@chakra-ui/react';

import { TypeAnimation } from 'react-type-animation';
import ButtonLink from '../ButtonLink/ButtonLink';

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
        <ButtonLink href="/about" color="#0E2954" variant="outline" size="md" title="About Me" radius="sm" />
      </VStack>
    </Flex>
  );
};

export default Hero;
