import { Flex, HStack, Button, Box } from '@chakra-ui/react';
import NavigationHeading from './NavigationHeading';
import NavigationLink from './NavigationLink';
import NavLinks from '@/_data/json/NavLinks.json';
import { Brackets } from 'lucide-react';

const Navigation = () => {
  return (
    <Box pos="sticky" top={0} zIndex={20} bgColor={'rgba(238, 240, 242, 0.95)'} boxShadow="sm">
      <Flex justifyContent="space-between" py="10px" px="115px">
        <NavigationHeading headingSize="lg" href="/" title={<Brackets />} headingColor="#0E2954" activeColor="#4E4FEB" />
        <HStack alignItems="center" gap={5}>
          {NavLinks.map((link) => {
            return <NavigationLink key={link.id} title={link.title} href={link.href} linkColor="#0E2954" activeColor="#4E4FEB" dividerOrientation="vertical" dividerHeight={link.dividerHeight} />;
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
