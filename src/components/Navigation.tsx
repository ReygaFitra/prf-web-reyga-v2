'use client';
import { Flex, Heading, HStack, Button, Divider, Box, Container } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navigation = () => {
  return (
    <Container minW="6xl">
      <Box pos="sticky" top={0} zIndex={20} backdropFilter="auto" backdropBlur="8px">
        <Flex justifyContent="space-between" py="10px">
          <Heading size="lg" color="#4E4FEB">
            <NextLink href="/">Home</NextLink>
          </Heading>
          <HStack alignItems="center" gap={5} color="#4E4FEB">
            <NextLink href="/about">About</NextLink>
            <Divider orientation="vertical" height="25px" />
            <NextLink href="/blog">Blog</NextLink>
            <Divider orientation="vertical" height="25px" />
            <NextLink href="/projects">Projects</NextLink>
            <Divider orientation="vertical" height="25px" />
            <NextLink href="/dashboard">Dashboard</NextLink>
          </HStack>
          <HStack>
            <Button variant="outline" size="sm" alignItems="center" color="#4E4FEB">
              Theme
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navigation;
