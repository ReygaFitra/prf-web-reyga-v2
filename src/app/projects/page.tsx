'use client';
import ProjectsFragment from '@/fragments/ProjectsFragment';
import { Container } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | Projects',
  description: `Projects Page`,
};

export default function Projects() {
  return (
    <Container minWidth="6xl">
      <ProjectsFragment />
    </Container>
  );
}
