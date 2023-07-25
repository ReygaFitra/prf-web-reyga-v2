'use client';
import DashboardFragment from '@/fragments/DashboardFragment';
import { Container } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | Dashboard',
  description: `Dashboard Page`,
};

export default function Dashboard() {
  return (
    <Container minW="6xl">
      <DashboardFragment />
    </Container>
  );
}
