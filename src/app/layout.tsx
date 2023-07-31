'use client';
import './globals.css';
import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Navigation from '@/components/ui/Navigation/Navigation';
import Footer from '@/components/ui/Footer/Footer';
import RootContainer from '@/components/ui/RootContainer/RootContainer';
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
            <Box as="main" px={{ base: '20px', md: '80px', lg: '125px' }}>
              {children}
            </Box>
            <Footer />
          </RootContainer>
        </ChakraProvider>
      </body>
    </html>
  );
}
