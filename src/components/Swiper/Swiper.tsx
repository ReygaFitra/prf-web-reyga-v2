import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image'; // Import the next/image component
import certif1 from '@/assets/img/certifications/certif1.jpg';
import certif2 from '@/assets/img/certifications/certif2.jpg';
import certif3 from '@/assets/img/certifications/certif3.jpg';
import certif4 from '@/assets/img/certifications/certif4.jpg';
import certif5 from '@/assets/img/certifications/certif5.jpg';
import certif6 from '@/assets/img/certifications/certif6.jpg';
const images = [certif1, certif2, certif3, certif4, certif5, certif6];

const Swiper = () => {
  return (
    <>
      <Splide
        options={{
          type: 'slide', // Use slide mode
          perPage: 1, // Show 1 slide per view
          gap: '1rem', // Set gap between slides
          autoplay: true, // Enable autoplay
          pauseOnHover: false, // Pause autoplay when hovering
          arrows: false, // Hide arrows
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <Image
              src={image}
              alt={`Carousel Image ${index}`}
              width={500} // Set the desired width of the image
              height={300} // Set the desired height of the image
            />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Swiper;
