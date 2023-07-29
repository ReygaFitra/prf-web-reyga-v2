'use client';
import { Box } from '@chakra-ui/react';
import BioModule from '@/modules/about/Bio';
import TechStack from '@/modules/about/TechStack';
import Timeline from '@/modules/about/Timeline';
import Social from '@/modules/about/Social';

export const metadata = {
  title: 'Reyga Fitra Ramadhan | About',
  description: `About Page`,
};

export default function About() {
  return (
    <Box>
      <section>
        <BioModule />
      </section>
      <br />
      <section>
        <TechStack />
      </section>
      <br />
      <section>
        <Timeline />
      </section>
      <br />
      <section>
        <Social />
      </section>
      <br />
    </Box>
  );
}
