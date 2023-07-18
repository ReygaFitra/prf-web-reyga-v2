'use client';

import TitleSection from '@/components/Title/TitleSection';
import { Box, Flex, Text } from '@chakra-ui/react';

const BioFragment = () => {
  return (
    <>
      <TitleSection width="100px" headingSize="lg" headingColor="#4E4FEB" headingFont="Changa" name="About" dividerColor="#4E4FEB" />
      <Box py="10px" my="20px">
        <Flex direction="column" gap={5}>
          <Text color="#0E2954">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet est fugiat suscipit animi sit ea similique, porro iure a autem vero consequatur voluptas, asperiores nemo praesentium, minus necessitatibus explicabo minima.
          </Text>
          <Text color="#0E2954">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ducimus quasi molestiae incidunt earum odio facere alias ex, deleniti a eum quas modi explicabo esse maxime aspernatur eius accusantium eligendi reprehenderit,
            nesciunt suscipit amet necessitatibus iste! Illo, illum aut, minima exercitationem officiis recusandae excepturi nostrum mollitia reprehenderit soluta consequuntur dolor?
          </Text>
          <Text color="#0E2954">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo illum aperiam eveniet sapiente delectus, itaque aspernatur error voluptatem, explicabo distinctio harum odio aut dolore excepturi quod? Ipsa doloribus, esse deserunt
            repellat autem ex accusantium dolor aperiam illum totam quaerat fugiat.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default BioFragment;
