import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Container, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Frame from '../Frame/Frame';
import { Theme } from '@/lib/Theme';

type Swiper = {
  children: React.ReactNode;
};

const Swiper = (props: Swiper) => {
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');

  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const boxShadowColor = isDarkMode ? Theme.colors.primary.dark : Theme.colors.primary.light;

  const { children } = props;
  return (
    <Container minW={{ base: 'xs', md: 'xl' }}>
      <Frame w="full" minH="3em" bgColor={secondaryColor} p="1rem" rounded="none" boxShadow={{ shadow: '15px 15px', color: boxShadowColor }} overflow="hidden">
        <Splide
          options={{
            type: 'slide',
            perPage: 1,
            gap: '20px',
            autoplay: true,
            pauseOnHover: false,
            arrows: true,
            speed: 800,
            rewind: true,
          }}
        >
          {children}
        </Splide>
      </Frame>
    </Container>
  );
};

export default Swiper;
