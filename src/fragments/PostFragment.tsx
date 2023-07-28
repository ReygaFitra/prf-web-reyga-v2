import Frame from '@/components/ui/Frame/Frame';
import TitleSection from '@/components/ui/Title/TitleSection';
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import Project3 from '@/assets/img/projects/project3.jpg';

const PostFragment = () => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');
  const baseColor = useColorModeValue('base.light', 'base.dark');
  return (
    <>
      <TitleSection width="100px" headingSize="lg" headingColor={primaryColor} headingFont="Changa" name="Blog" />
      <Box w="100%" h="450px" my="20px" mb="50px" color={baseColor}>
        <Frame bgColor={secondaryColor} maxW="100%" h="100%" boxShadow="17px 17px #454955" overflow="hidden" rounded="sm">
          <Image priority={true} src={Project3} alt="example" quality={100} style={{ objectFit: 'cover', width: '100%', maxHeight: '300px' }} />
          <Box p="15px">
            <Heading size="lg" fontFamily="changa">
              Post 1
            </Heading>
            <Text>This is post 1 date</Text>
            <Text fontSize="2xl" my="15px">
              This is post 1 Description
            </Text>
          </Box>
        </Frame>
      </Box>
      <Box w="100%" h="450px" my="20px" mb="50px" color={baseColor}>
        <Frame bgColor={secondaryColor} maxW="100%" h="100%" boxShadow="17px 17px #454955" overflow="hidden" rounded="sm">
          <Image priority={true} src={Project3} alt="example" quality={100} style={{ objectFit: 'cover', width: '100%', maxHeight: '300px' }} />
          <Box p="15px">
            <Heading size="lg" fontFamily="changa">
              Post 1
            </Heading>
            <Text>This is post 1 date</Text>
            <Text fontSize="2xl" my="15px">
              This is post 1 Description
            </Text>
          </Box>
        </Frame>
      </Box>
    </>
  );
};

export default PostFragment;
