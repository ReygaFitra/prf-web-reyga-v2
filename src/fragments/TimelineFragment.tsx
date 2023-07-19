'use client';
import CustomTimeline from '@/components/Timeline/CustomTimeline';
import TitleSection from '@/components/Title/TitleSection';
import { Box } from '@chakra-ui/react';
import { Timelines } from '@/_data/tsx/Timelines';

const TimelineFragment = () => {
  return (
    <>
      <TitleSection width="160px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="Education" dividerColor="#4E4FEB" />
      <Box my="20px">
        {Timelines.map((timeline) => (
          <CustomTimeline timeline={timeline.name} description={timeline.description} timelineIcon={timeline.Icon} />
        ))}
      </Box>
    </>
  );
};

export default TimelineFragment;
