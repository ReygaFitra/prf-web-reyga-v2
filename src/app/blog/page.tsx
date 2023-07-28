'use client';
import PostFragment from '@/fragments/PostFragment';
import { Box } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | Blog',
  description: `Blog Page`,
};

export default function Blog() {
  return (
    <Box>
      <PostFragment />
    </Box>
  );
}
