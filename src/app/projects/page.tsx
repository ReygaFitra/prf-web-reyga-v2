'use client';
import ProjectsFragment from '@/fragments/ProjectsFragment';
import { Box } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | Projects',
  description: `Projects Page`,
};

export default function Projects() {
  return (
    <Box>
      <ProjectsFragment />
    </Box>
  );
}
