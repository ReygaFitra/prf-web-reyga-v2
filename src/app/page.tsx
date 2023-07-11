'use client';
import HeroFragment from '@/fragments/HeroFragment';
import RecentFragment from '@/fragments/RecentFragment';

export const metadata = {
  title: 'Reyga Fitra Ramadhan',
  description: `Reyga's Personal Website`,
};

export default function Home() {
  return (
    <main className="main-layer">
      <HeroFragment />
      <RecentFragment />
    </main>
  );
}
