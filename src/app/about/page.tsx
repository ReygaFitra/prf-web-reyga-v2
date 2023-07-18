'use client';
import BioFragment from '@/fragments/BioFragment';
import SkillsFragment from '@/fragments/SkillsFragment';
import { Container } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | About',
  description: `About Page`,
};

export default function About() {
  return (
    <Container minWidth="6xl">
      <BioFragment />
      <SkillsFragment />
    </Container>
  );
}
