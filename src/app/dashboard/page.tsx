'use client';

import Music from '@/modules/dashboard/Music';
import ViewStats from '@/modules/dashboard/ViewStats';
import { Box } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | Dashboard',
  description: `Dashboard Page`,
};

export default function Dashboard() {
  return (
    <Box>
      <section>
        <ViewStats />
      </section>
      <br />
      <section>
        <Music />
      </section>
    </Box>
  );
}
