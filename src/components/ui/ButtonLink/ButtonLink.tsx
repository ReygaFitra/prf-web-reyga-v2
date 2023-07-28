import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';

type ButtonLink = {
  title: string;
  href: string;
  variant: string;
  size: string;
  color: string;
  radius: string;
};
const ButtonLink = (props: ButtonLink) => {
  const { title, href, variant, size, color, radius } = props;

  return (
    <NextLink href={href}>
      <Button variant={variant} size={size} alignItems="center" color={color} borderRadius={radius}>
        {title}
      </Button>
    </NextLink>
  );
};

export default ButtonLink;
