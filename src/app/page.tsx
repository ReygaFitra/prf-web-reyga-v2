'use client';

import Hero from '@/modules/home/Hero';
import { Box, useColorModeValue } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan',
  description: `Reyga's Personal Website`,
};

export default function Home() {
  const primaryColor = useColorModeValue('primary.light', 'primary.dark');
  const tertiaryColor = useColorModeValue('tertiary.light', 'tertiary.dark');
  return (
    <section>
      <Box minH="full" w="full" display="flex" justifyContent="center">
        <Hero name="Reyga Fitra Ramadhan" nameColor={primaryColor} nameFont="Changa" roleColor={tertiaryColor} roleSequence={['< Software Engineer />', 3000, '< Fullstack Developer />', 3000]} />
      </Box>
    </section>
  );
}
