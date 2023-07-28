'use client';
import './globals.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import RootContainer from '@/components/RootContainer/RootContainer';
import { Theme } from '@/lib/Theme';

export const metadata = {
  title: 'Reyga Fitra Ramadhan',
  description: `Reyga's Personal Website`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={Theme}>
          <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
          <RootContainer fontFamily="changa">
            <Navigation />
            {children}
            <Footer />
          </RootContainer>
        </ChakraProvider>
      </body>
    </html>
  );
}
