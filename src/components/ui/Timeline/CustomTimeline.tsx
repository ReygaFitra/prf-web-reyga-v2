import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

type CustomTimeline = {
  timeline: string;
  description: string;
  timelineIcon: any;
};

const CustomTimeline = (props: CustomTimeline) => {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');
  const tertiaryColor = useColorModeValue('tertiary.light', 'tertiary.dark');
  const { timeline, description, timelineIcon } = props;

  return (
    <Box>
      <Flex gap={2}>
        <Flex direction="column">
          <Box p="10px" bg={secondaryColor} rounded="full" border="4px" borderColor={primaryColor}></Box>
          <Box w="4px" bg={primaryColor} height="85px" m="auto"></Box>
        </Flex>

        <Box>
          <Box px="3px">
            <Flex gap={2}>
              {timelineIcon}
              <Box>
                <Text fontSize="xl" fontWeight="semibold" color={primaryColor}>
                  {timeline}
                </Text>
                <Text fontSize="sm" fontStyle="italic" color={tertiaryColor}>
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
