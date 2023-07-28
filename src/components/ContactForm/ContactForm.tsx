import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Text, Textarea, useColorModeValue } from '@chakra-ui/react';
import { HorizontalDivider } from '../Divider/CustomDivider';
import Frame from '../Frame/Frame';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');
  const tertiaryColor = useColorModeValue('tertiary.light', 'tertiary.dark');
  const baseColor = useColorModeValue('base.light', 'base.dark');

  return (
    <Container minW="xl" my="20px">
      <FormControl w="100%" color={tertiaryColor}>
        <Frame w="100%" h="100%" bgColor={secondaryColor} rounded="none" p="20px" boxShadow="15px 15px #4E4FEB" overflow="hidden">
          <Text fontStyle="italic" color={baseColor} my="10px">
            Or you can send me a message via email :
          </Text>
          <Flex gap={2} alignItems="center">
            <Mail color={baseColor} />
            <Text fontStyle="semibold" color={baseColor} my="5px">
              Regafitra12@gmail.com
            </Text>
          </Flex>

          <HorizontalDivider width="100%" height="3px" />
          <Box my="25px">
            <FormLabel>Name :</FormLabel>
            <Input size="sm" rounded="sm" variant="outline" type="text" placeholder="Your Name..." />
          </Box>
          <Box my="25px">
            <FormLabel>Email :</FormLabel>
            <Input size="sm" rounded="sm" variant="outline" type="text" placeholder="Your Email..." />
          </Box>
          <Box my="25px">
            <FormLabel>Email :</FormLabel>
            <Textarea size="sm" rounded="sm" placeholder="Your Message..." p="5px" />
          </Box>
          <Button rounded="sm" variant="ghost" color={baseColor}>
            Submit
          </Button>
        </Frame>
      </FormControl>
    </Container>
  );
};

export default ContactForm;
