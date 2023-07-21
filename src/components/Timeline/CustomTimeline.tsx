import { Box, Flex, Text } from '@chakra-ui/react';

type CustomTimeline = {
  timeline: string;
  description: string;
  timelineIcon: any;
};

const CustomTimeline = (props: CustomTimeline) => {
  const { timeline, description, timelineIcon } = props;

  return (
    <Box>
      <Flex gap={2}>
        <Flex direction="column">
          <Box p="10px" bg="#4E4FEB" rounded="full" border="4px" borderColor="#068FFF"></Box>
          <Box w="4px" bg="#068FFF" height="85px" m="auto"></Box>
        </Flex>

        <Box>
          <Box px="3px">
            <Flex gap={2}>
              {timelineIcon}
              <Box>
                <Text fontSize="xl" fontWeight="semibold" color="#4E4FEB">
                  {timeline}
                </Text>
                <Text fontSize="sm" fontStyle="italic" color="#0E2954">
                  {description}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default CustomTimeline;
