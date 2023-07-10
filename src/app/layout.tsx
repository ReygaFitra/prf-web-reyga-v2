'use client';
import Navigation from '@/components/Navigation';
import './globals.css';
import { Box, ChakraProvider } from '@chakra-ui/react';

export const metadata = {
  title: 'Reyga Fitra Ramadhan',
  description: `Reyga's Personal Website`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navigation />
          <Box px="125px">{children}</Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
