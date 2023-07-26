'use client';
import './globals.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import RootContainer from '@/components/RootContainer/RootContainer';

export const metadata = {
  title: 'Reyga Fitra Ramadhan',
  description: `Reyga's Personal Website`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <RootContainer bgColor="#eef0f2" fontFamily="changa">
            <Navigation />
            {children}
            <Footer />
          </RootContainer>
        </ChakraProvider>
      </body>
    </html>
  );
}
