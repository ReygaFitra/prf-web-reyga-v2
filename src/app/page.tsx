'use client';
import HeroFragment from '@/fragments/HeroFragment';
import { Box } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan',
  description: `Reyga's Personal Website`,
};

export default function Home() {
  return (
    <Box minH="full" w="full" display="flex" justifyContent="center">
      <HeroFragment />
    </Box>
  );
}
