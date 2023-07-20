'use client';
import Hero from '@/components/Hero/Hero';
import { Text, Heading, Flex, VStack, Box, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

const HeroFragment = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box backdropFilter="auto" backdropBlur="5px" w="full" minH="455px" boxShadow="lg" borderRadius="md">
        <Hero name="Reyga Fitra Ramadhan" nameColor="#4E4FEB" nameFont="Changa" roleColor="#068FFF" roleSequence={['Software Engineer', 3000, 'Fullstack Developer', 3000]} />
      </Box>
    </Box>
  );
};

export default HeroFragment;
