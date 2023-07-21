'use client';
import CustomTimeline from '@/components/Timeline/CustomTimeline';
import TitleSection from '@/components/Title/TitleSection';
import { Box, Flex } from '@chakra-ui/react';
import { Timelines } from '@/_data/tsx/Timelines';
import Swiper from '@/components/Swiper/Swiper';

const TimelineFragment = () => {
  return (
    <>
      <TitleSection width="160px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="Education" dividerColor="#4E4FEB" />
      <Flex gap={3} justifyContent="space-between">
        <Box my="20px">
          {Timelines.map((timeline) => (
            <CustomTimeline key={timeline.id} timeline={timeline.name} description={timeline.description} timelineIcon={timeline.Icon} />
          ))}
        </Box>
        <Box>
          <Swiper />
        </Box>
      </Flex>
    </>
  );
};

export default TimelineFragment;
