'use client';
import { Divider } from '@chakra-ui/react';
import NextLink from 'next/link';

type NavLink = {
  title: string;
  href: string;
  dividerOrientation: 'horizontal' | 'vertical';
  dividerHeight: string;
};
const NavigationLink = (props: NavLink) => {
  const { title, href, dividerOrientation, dividerHeight } = props;

  return (
    <>
      <NextLink href={href}>{title}</NextLink>
      <Divider orientation={dividerOrientation} height={dividerHeight} />
    </>
  );
};

export default NavigationLink;
