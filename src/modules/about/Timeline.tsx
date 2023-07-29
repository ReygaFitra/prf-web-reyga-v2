import CustomTimeline from '@/components/ui/Timeline/CustomTimeline';
import TitleSection from '@/components/ui/Title/TitleSection';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { Timelines } from '@/_data/tsx/Timelines';
import Swiper from '@/components/ui/Swiper/Swiper';
import Image from 'next/image';
import { Certifications } from '@/_data/tsx/Certif';
import { SplideSlide } from '@splidejs/react-splide';

const Timeline = () => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');

  return (
    <>
      <TitleSection width="160px" headingSize="lg" headingColor={primaryColor} headingFont="Changa" name="Education" />
      <Flex gap={3} justifyContent="space-between" wrap="wrap">
        <Box my="20px">
          {Timelines.map((timeline) => (
            <CustomTimeline key={timeline.id} timeline={timeline.name} description={timeline.description} timelineIcon={timeline.Icon} />
          ))}
        </Box>
        <Box>
          <Swiper>
            {Certifications.map((image, index) => (
              <SplideSlide key={index}>
                <Image src={image.img} alt={`Carousel Image ${index}`} style={{ display: 'flex', objectFit: 'cover', alignItems: 'center', height: '100%', width: '100%' }} />
              </SplideSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
    </>
  );
};

export default Timeline;
