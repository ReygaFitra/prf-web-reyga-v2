'use client';
import SkillsFragment from '@/fragments/SkillsFragment';
import { Container } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | About',
  description: `About Page`,
};

export default function About() {
  return (
    <main>
      <Container minWidth="4xl">
        <SkillsFragment />
      </Container>
    </main>
  );
}
