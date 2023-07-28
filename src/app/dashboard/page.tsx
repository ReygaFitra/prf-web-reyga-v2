'use client';
import DashboardFragment from '@/fragments/DashboardFragment';
import { Box } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | Dashboard',
  description: `Dashboard Page`,
};

export default function Dashboard() {
  return (
    <Box>
      <DashboardFragment />
    </Box>
  );
}
