import { Text, Heading, Flex, VStack, Box } from '@chakra-ui/react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import ButtonLink from '../ButtonLink/ButtonLink';
import hamster from '@/assets/img/hero/hamster.jpg';

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
        <Box maxW="300px" maxH="300px" rounded="sm" my="20px" bgColor={'#0E2954'} p="10px" style={{ boxShadow: '10px 10px #4E4FEB', overflow: 'hidden' }}>
          <Image src={hamster} alt="Hamster" style={{ objectFit: 'cover', alignItems: 'center', height: '100%', width: '100%' }} />
        </Box>
      </VStack>
    </Flex>
  );
};

export default Hero;
