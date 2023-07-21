'use client';
import BioFragment from '@/fragments/BioFragment';
import SocialFragment from '@/fragments/SocialFragment';
import TimelineFragment from '@/fragments/TimelineFragment';
import { Container } from '@chakra-ui/react';
import TechStackFragment from '@/fragments/TechStackFragment';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | About',
  description: `About Page`,
};

export default function About() {
  return (
    <Container minWidth="6xl">
      <BioFragment />
      <TechStackFragment />
      <TimelineFragment />
      <SocialFragment />
    </Container>
  );
}
