'use client';

import Post from '@/modules/blog/Post';
import { Box } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | Blog',
  description: `Blog Page`,
};

export default function Blog() {
  return (
    <Box>
      <section>
        <Post />
      </section>
    </Box>
  );
}
