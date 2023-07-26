import { Box, Heading } from '@chakra-ui/react';
import { HorizontalDivider } from '../Divider/CustomDivider';

type Title = {
  width: string;
  headingSize: string;
  headingColor: string;
  headingFont: string;
  name: string;
};

const TitleSection = (props: Title) => {
  const { width, headingSize, headingColor, headingFont, name } = props;
  return (
    <Box w={width}>
      <Heading size={headingSize} color={headingColor} py="15px" fontFamily={headingFont}>
        {name}
      </Heading>
      <HorizontalDivider width="100%" height="3px" />
    </Box>
  );
};

export default TitleSection;
