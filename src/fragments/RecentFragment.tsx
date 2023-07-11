'use client';
import { Box, Heading, Card, CardBody, Divider, Text, CardHeader } from '@chakra-ui/react';

const RecentFragment = () => {
  return (
    <Box bgColor="#0E2954" px="115px" py="5px">
      <Heading size="lg" color="#ECF8F9" py="35px">
        Recently Post Section
      </Heading>
      <Card my="10px" variant="outline" size="md" bgColor="transparent" _hover={{ bgColor: 'rgba(255, 255, 255, 0.3)', transition: '0.4s' }}>
        <CardHeader>
          <Heading color="#ECF8F9" size="lg">
            CardHeader
          </Heading>
          <Divider orientation="horizontal" mt="10px" />
        </CardHeader>
        <CardBody>
          <Text color="#ECF8F9" py="10px">
            Recent Blog
          </Text>
        </CardBody>
      </Card>
      <Card my="10px" variant="outline" size="md" bgColor="transparent" _hover={{ bgColor: 'rgba(255, 255, 255, 0.3)', transition: '0.4s' }}>
        <CardHeader>
          <Heading color="#ECF8F9" size="lg">
            CardHeader
          </Heading>
          <Divider orientation="horizontal" mt="10px" />
        </CardHeader>
        <CardBody>
          <Text color="#ECF8F9" py="10px">
            Recent Blog
          </Text>
        </CardBody>
      </Card>
      <Card my="10px" variant="outline" size="md" bgColor="transparent" _hover={{ bgColor: 'rgba(255, 255, 255, 0.3)', transition: '0.4s' }}>
        <CardHeader>
          <Heading color="#ECF8F9" size="lg">
            CardHeader
          </Heading>
          <Divider orientation="horizontal" mt="10px" />
        </CardHeader>
        <CardBody>
          <Text color="#ECF8F9" py="10px">
            Recent Blog
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};

export default RecentFragment;
