'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'

export default function CTAsections() {
  return (
    <Box
      bg="#121212"
      w="1135px"
      ml="200px"
      py={10}
      px={{ base: 4, md: 16 }}
    >
      <Flex
        bg="transparent"
        borderRadius="2xl"
        overflow="hidden"
        h="400px"
      >
        {/* Left Side (Text Block) */}
        <Box
          bg="#D0F0DC"
          w="50%"
          p={10}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          borderTopLeftRadius="24px"
          borderBottomLeftRadius="24px"
        >
          <Heading ml="60px" fontSize="36px" color="#0F1F18" fontWeight="700" mb={4}>
            Ready to Book Your <br /> Next Adventure?
          </Heading>
          <Text ml="60px" fontSize="24px" fontWeight="400" color="#0F1F18" mb={8}>
            Get exclusive deals and immersive <br />
            previews with our smart booking <br />
            platform.
          </Text>
          <Button
            bg="#397B5A"
            color="white"
            size="lg"
            borderRadius="1000px"
            w="374px"
            h="45px"
            ml="60px"
            _hover={{ bg: '#2e684c' }}
          >
            Book now
          </Button>
        </Box>

        {/* Right Side (Image) */}
        <Box
          w="50%"
          h="100%"
        >
          <Image
            src="/CTA.jpg" 
            alt="Booking Preview"
            objectFit="cover"
            w="100%"
            h="100%"
            borderTopRightRadius="24px"
            borderBottomRightRadius="24px"
          />
        </Box>
      </Flex>
    </Box>
  )
}
