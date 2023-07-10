'use client';
import { Flex, Heading, HStack, Button, Divider } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navigation = () => {
  return (
    <Flex justifyContent="space-between" py="10px" px="125px" borderBottom="1px">
      <Heading size="lg">
        <NextLink href="/">Home</NextLink>
      </Heading>
      <HStack alignItems="center" gap={5}>
        <NextLink href="/about">About</NextLink>
        <Divider orientation="vertical" height="25px" />
        <NextLink href="/blog">Blog</NextLink>
        <Divider orientation="vertical" height="25px" />
        <NextLink href="/projects">Projects</NextLink>
        <Divider orientation="vertical" height="25px" />
        <NextLink href="/dashboard">Dashboard</NextLink>
      </HStack>
      <HStack>
        <Button variant="outline" size="sm" alignItems="center">
          Theme
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navigation;
