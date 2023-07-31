import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
// import { TopTracks } from '@/app/api/spotify/route';

const Music = () => {
  const secondaryColor = useColorModeValue('secondary.light', 'secondary.dark');
  const tertiaryColor = useColorModeValue('tertiary.light', 'tertiary.dark');

  return (
    <>
      <Heading size="md" fontFamily="changa" color={secondaryColor}>
        Music
      </Heading>
      <Box bgColor={secondaryColor} w="100%" rounded="md" color={tertiaryColor} p="10px" my="10px">
        <Text>Not playing music - Spotify</Text>
      </Box>
      <Box w="100%" rounded="sm" color={secondaryColor} my="20px">
        <Heading size="md" fontFamily="changa">
          Top Tracks
        </Heading>
        {/* {TopTracks.map((track: any) => (
          <Text key={track.id} color={tertiaryColor} px="10px" py="25px">
            {track.name}
          </Text>
        ))} */}
        <Text px="10px" py="25px" color={tertiaryColor}>
          Music List
        </Text>
        <hr />
        <Text px="10px" py="25px" color={tertiaryColor}>
          Music List
        </Text>
        <hr />
        <Text px="10px" py="25px" color={tertiaryColor}>
          Music List
        </Text>
        <hr />
        <Text px="10px" py="25px" color={tertiaryColor}>
          Music List
        </Text>
        <hr />
      </Box>
    </>
  );
};

export default Music;
