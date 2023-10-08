import { Divider, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  title: string;
  href: string;
  linkColor: string;
  activeColor: string;
  dividerOrientation?: 'horizontal' | 'vertical';
  dividerHeight?: string;
  dividerWidth?: string;
  paddingY?: string;
  paddingX?: string;
};

const NavigationLink = (props: NavLink) => {
  const { title, href, dividerOrientation, dividerHeight, dividerWidth, linkColor, activeColor, paddingX, paddingY } = props;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <NextLink href={href}>
        <Text color={isActive ? activeColor : linkColor} borderBottom={isActive ? '2px solid' : 'none'} borderColor={activeColor} py={paddingY} px={paddingX}>
          {title}
        </Text>
      </NextLink>
      <Divider orientation={dividerOrientation} height={dividerHeight} width={dividerWidth} />
    </>
  );
};

export default NavigationLink;
