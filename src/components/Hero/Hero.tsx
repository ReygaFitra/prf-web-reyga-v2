import { Text, Heading, Flex, VStack } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import ButtonLink from '../ButtonLink/ButtonLink';
import Frame from '../Frame/Frame';
import hamster from '@/assets/img/hero/hamster.jpg';
import Image from 'next/image';

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
        <ButtonLink href="/about" color="#4E4FEB" variant="outline" size="md" title="About Me" radius="sm" />
        <Frame maxW="300px" maxH="300px" rounded="sm" my="20px" bgColor="#0E2954" p="10px" boxShadow={'13px 13px #4E4FEB'} overflow="hidden">
          <Image src={hamster} alt="source: https://unsplash.com/photos/D_pXn7cueOs" style={{ objectFit: 'cover', alignItems: 'center', height: '100%', width: '100%' }} />
        </Frame>
      </VStack>
    </Flex>
  );
};

export default Hero;
