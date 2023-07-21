import { Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type NavHeading = {
  title: any;
  href: string;
  headingSize: string;
  activeColor: string;
  headingColor: string;
};

const NavigationHeading = (props: NavHeading) => {
  const { href, title, headingSize, headingColor, activeColor } = props;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink href={href}>
      <Heading size={headingSize} color={isActive ? activeColor : headingColor}>
        {title}
      </Heading>
    </NextLink>
  );
};

export default NavigationHeading;
