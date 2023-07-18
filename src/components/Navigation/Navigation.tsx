'use client';
import { Flex, HStack, Button, Box } from '@chakra-ui/react';
import NavigationHeading from './NavigationHeading';
import NavigationLink from './NavigationLink';
import NavLinks from '@/_data/json/NavLinks.json';

const Navigation = () => {
  return (
    <Box pos="sticky" top={0} zIndex={20} backdropFilter="auto" backdropBlur="8px" boxShadow="sm">
      <Flex justifyContent="space-between" py="10px" px="115px">
        <NavigationHeading headingSize="lg" href="/" title="Home" headingColor="#4E4FEB" />
        <HStack alignItems="center" gap={5} color="#4E4FEB">
          {NavLinks.map((link) => {
            return <NavigationLink key={link.id} title={link.title} href={link.href} dividerOrientation="vertical" dividerHeight={link.dividerHeight} />;
          })}
        </HStack>
        <HStack>
          <Button variant="outline" size="sm" alignItems="center" color="#4E4FEB">
            Theme
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navigation;
