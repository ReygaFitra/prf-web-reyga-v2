'use client';
import { Box, Heading, Card, CardBody, Divider, Text } from '@chakra-ui/react';

const RecentFragment = () => {
  return (
    <Box bgColor="#222222" px="125px" py="5px">
      <Heading size="lg" color="#22a39f" py="35px">
        Recently Post Section
      </Heading>
      <Card my="10px">
        <CardBody>
          <Heading color="#22a39f">Heading</Heading>
          <Divider orientation="horizontal" mt="10px" />
          <Text color="#22a39f" py="25px">
            Recent Blog
          </Text>
        </CardBody>
      </Card>
      <Card my="10px">
        <CardBody>
          <Heading color="#22a39f">Heading</Heading>
          <Divider orientation="horizontal" mt="10px" />
          <Text color="#22a39f" py="25px">
            Recent Blog
          </Text>
        </CardBody>
      </Card>
      <Card my="10px">
        <CardBody>
          <Heading color="#22a39f">Heading</Heading>
          <Divider orientation="horizontal" mt="10px" />
          <Text color="#22a39f" py="25px">
            Recent Blog
          </Text>
        </CardBody>
      </Card>
      <Card my="10px">
        <CardBody>
          <Heading color="#22a39f">Heading</Heading>
          <Divider orientation="horizontal" mt="10px" />
          <Text color="#22a39f" py="25px">
            Recent Blog
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
};

export default RecentFragment;
