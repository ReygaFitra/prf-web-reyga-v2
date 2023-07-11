'use client';
import HeroFragment from '@/fragments/HeroFragment';
import RecentFragment from '@/fragments/RecentFragment';
import { Container } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan',
  description: `Reyga's Personal Website`,
};

export default function Home() {
  return (
    <main className="main-layer">
      <Container minWidth="6xl">
        <HeroFragment />
      </Container>
      <RecentFragment />
    </main>
  );
}
