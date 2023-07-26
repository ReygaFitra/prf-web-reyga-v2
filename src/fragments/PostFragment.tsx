import Frame from '@/components/Frame/Frame';
import TitleSection from '@/components/Title/TitleSection';
import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Project3 from '@/assets/img/projects/project3.jpg';

const PostFragment = () => {
  return (
    <>
      <TitleSection width="100px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="Blog" dividerColor="#4E4FEB" />
      <Box w="100%" h="450px" my="20px" mb="50px" color="#ECF8F9">
        <Frame bgColor="#0E2954" maxW="100%" h="100%" boxShadow="17px 17px #4E4FEB" overflow="hidden" rounded="sm">
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
      <Box w="100%" h="450px" my="20px" mb="50px" color="#ECF8F9">
        <Frame bgColor="#0E2954" maxW="100%" h="100%" boxShadow="17px 17px #4E4FEB" overflow="hidden" rounded="sm">
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