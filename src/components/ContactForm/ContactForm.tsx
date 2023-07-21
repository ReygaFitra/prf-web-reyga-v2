import { Box, Button, Container, FormControl, FormLabel, Input, Text, Textarea } from '@chakra-ui/react';
import { HorizontalDivider } from '../Divider/CustomDivider';

const ContactForm = () => {
  return (
    <Container minW="xl" my="20px">
      <FormControl w="100%" bgColor="#0E2954" color="#ECF8F9" p="20px" style={{ boxShadow: '15px 15px #4E4FEB', overflow: 'hidden' }}>
        <Text fontStyle={'italic'} color="#ECF8F9" my="10px">
          Or you can send me a message via email :
        </Text>
        <HorizontalDivider width="100%" height="3px" color="#4E4FEB" />
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
        <Button rounded="sm" variant="solid" color="#4E4FEB">
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default ContactForm;
