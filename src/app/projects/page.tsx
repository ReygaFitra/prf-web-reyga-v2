'use client';

import Project from '@/modules/projects/Project';
import { Box } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | Projects',
  description: `Projects Page`,
};

export default function Projects() {
  return (
    <Box>
      <section>
        <Project />
      </section>
    </Box>
  );
}
