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
          <Image priority={true} src={Project3} alt="example" style={{ objectFit: 'cover', maxHeight: '280px', width: '100%' }} />
          <Box p="10px">
            <Heading size="lg" fontFamily="changa">
              Post 1
            </Heading>
            <Text>This is description post 1</Text>
          </Box>
        </Frame>
      </Box>

      <Box w="100%" h="450px" my="20px" mb="50px" color="#ECF8F9">
        <Frame bgColor="#0E2954" maxW="100%" h="100%" boxShadow="17px 17px #4E4FEB" overflow="hidden" rounded="sm">
          <Image priority={true} src={Project3} alt="example" style={{ objectFit: 'cover', maxHeight: '280px', width: '100%' }} />
          <Box p="10px">
            <Heading size="lg" fontFamily="changa">
              Post 1
            </Heading>
            <Text>This is description post 1</Text>
          </Box>
        </Frame>
      </Box>
    </>
  );
};

export default PostFragment;
