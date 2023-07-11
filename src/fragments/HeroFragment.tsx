'use client';
import { Text, Heading, Flex, VStack, Box, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const HeroFragment = () => {
  return (
    <Box mx="125px" display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box backdropFilter="auto" backdropBlur="5px" w="full" minH="455px" boxShadow="lg" borderRadius="md">
        <Flex justifyContent="center">
          <VStack>
            <Heading color="#4E4FEB">Heading</Heading>
            <Text color="#068FFF">Hero Section</Text>
            <NextLink href="/about">
              <Button variant="outline" size="md" alignItems="center" color="#4E4FEB" borderRadius="sm">
                About
              </Button>
            </NextLink>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default HeroFragment;
