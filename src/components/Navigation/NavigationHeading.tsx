'use client';
import { Heading } from '@chakra-ui/react';
import NextLink from 'next/link';

type NavHeading = {
  title: string;
  href: string;
  headingSize: string;
  headingColor: string;
};

const NavigationHeading = (props: NavHeading) => {
  const { href, title, headingSize, headingColor } = props;

  return (
    <Heading size={headingSize} color={headingColor}>
      <NextLink href={href}>{title}</NextLink>
    </Heading>
  );
};

export default NavigationHeading;
