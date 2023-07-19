'use client';
import CustomTimeline from '@/components/Timeline/CustomTimeline';
import TitleSection from '@/components/Title/TitleSection';
import { Box } from '@chakra-ui/react';
import { GraduationCap } from 'lucide-react';

const TimelineFragment = () => {
  return (
    <>
      <TitleSection width="160px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="Education" dividerColor="#4E4FEB" />
      <Box my="20px">
        <CustomTimeline timeline="Example" description="Example" timelineIcon={<GraduationCap />} />
      </Box>
    </>
  );
};

export default TimelineFragment;
