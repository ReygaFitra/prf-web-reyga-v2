import NextLink from 'next/link';

type FootLink = {
  children: React.ReactNode;
  href: string;
};
const FooterLink = (props: FootLink) => {
  const { children, href } = props;

  return (
    <NextLink href={href} target="_blank">
      {children}
    </NextLink>
  );
};

export default FooterLink;
