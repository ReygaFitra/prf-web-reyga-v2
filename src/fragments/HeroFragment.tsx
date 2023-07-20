'use client';
import Hero from '@/components/Hero/Hero';
import { Box } from '@chakra-ui/react';

const HeroFragment = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box backdropFilter="auto" backdropBlur="5px" w="full" minH="455px" boxShadow="lg" borderRadius="md">
        <Hero name="Reyga Fitra Ramadhan" nameColor="#4E4FEB" nameFont="Changa" roleColor="#068FFF" roleSequence={['< Software Engineer />', 3000, '< Fullstack Developer />', 3000]} />
      </Box>
    </Box>
  );
};

export default HeroFragment;
