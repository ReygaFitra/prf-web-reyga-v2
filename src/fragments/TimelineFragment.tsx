import CustomTimeline from '@/components/Timeline/CustomTimeline';
import TitleSection from '@/components/Title/TitleSection';
import { Box, Flex } from '@chakra-ui/react';
import { Timelines } from '@/_data/tsx/Timelines';
import Swiper from '@/components/Swiper/Swiper';
import Image from 'next/image';
import { Certifications } from '@/_data/tsx/Certif';
import { SplideSlide } from '@splidejs/react-splide';

const TimelineFragment = () => {
  return (
    <>
      <TitleSection width="160px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="Education" />
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

export default TimelineFragment;
