import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';
import certif1 from '@/assets/img/certifications/certif1.jpg';
import certif2 from '@/assets/img/certifications/certif2.jpg';
import certif3 from '@/assets/img/certifications/certif3.jpg';
import certif4 from '@/assets/img/certifications/certif4.jpg';
import certif5 from '@/assets/img/certifications/certif5.jpg';
import { Container } from '@chakra-ui/react';
import Frame from '../Frame/Frame';
const images = [certif1, certif2, certif3, certif4, certif5];

const Swiper = () => {
  return (
    <Container minW={'xl'}>
      <Frame w="full" minH="3em" bgColor="#0E2954" p="1rem" rounded="none" boxShadow="14px 14px #4E4FEB" overflow="hidden">
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
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <Image src={image} alt={`Carousel Image ${index}`} style={{ display: 'flex', objectFit: 'cover', alignItems: 'center', height: '100%', width: '100%' }} />
            </SplideSlide>
          ))}
        </Splide>
      </Frame>
    </Container>
  );
};

export default Swiper;
