import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Container } from '@chakra-ui/react';
import Frame from '../Frame/Frame';

type Swiper = {
  children: React.ReactNode;
};

const Swiper = (props: Swiper) => {
  const { children } = props;
  return (
    <Container minW="xl">
      <Frame w="full" minH="3em" bgColor="#0E2954" p="1rem" rounded="none" boxShadow="15px 15px #4E4FEB" overflow="hidden">
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
