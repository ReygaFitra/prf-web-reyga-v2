'use client';
import PostFragment from '@/fragments/PostFragment';
import { Container } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | Blog',
  description: `Blog Page`,
};

export default function Blog() {
  return (
    <Container minW="6xl">
      <PostFragment />
    </Container>
  );
}
