import { Text, Heading, Flex, VStack, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';
import Frame from '@/components/ui/Frame/Frame';
import hamster from '@/assets/img/hero/hamster.jpg';
import Image from 'next/image';
import { Theme } from '@/lib/Theme';

type Hero = {
  name: string;
  nameColor: string;
  nameFont: string;
  roleColor: string;
  roleSequence: any[];
};

const Hero = (props: Hero) => {
  const { name, nameColor, nameFont, roleColor, roleSequence } = props;
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');

  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const boxShadowColor = isDarkMode ? Theme.colors.primary.dark : Theme.colors.primary.light;

  return (
    <Flex justifyContent="center">
      <VStack>
        <Heading color={nameColor} fontFamily={nameFont} fontWeight="semibold">
          {name}
        </Heading>
        <Text color={roleColor}>
          <TypeAnimation sequence={roleSequence} style={{ fontSize: '1.5em' }} repeat={Infinity} />
        </Text>
        <ButtonLink href="/about" color={primaryColor} variant="outline" size="md" title="Discover" radius="sm" />
        <Frame maxW="300px" maxH="300px" rounded="sm" my="20px" bgColor={secondaryColor} p="10px" boxShadow={{ shadow: '13px 13px', color: boxShadowColor }} overflow="hidden">
          <Image priority={true} src={hamster} alt="source: https://unsplash.com/photos/D_pXn7cueOs" style={{ objectFit: 'cover', alignItems: 'center', height: '100%', width: '100%' }} />
        </Frame>
      </VStack>
    </Flex>
  );
};

export default Hero;
