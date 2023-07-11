'use client';
import Navigation from '@/components/Navigation';
import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '@/components/Footer';

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
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
