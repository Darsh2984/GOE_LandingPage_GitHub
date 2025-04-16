'use client'

import {
  Box,
  Image,
  Text,
  Heading,
  IconButton,
  HStack,
} from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useRef } from 'react'

const places = [
  { name: 'Red Sea', image: '/places/Red Sea.jpg' },
  { name: 'Soma Bay', image: '/places/Soma Bay.jpg' },
  { name: 'Giza', image: '/places/Giza.jpg' },
  { name: 'Nile', image: '/places/Nile.jpg' },
  { name: 'Nabq Bay', image: '/places/Nabq Bay.jpg' },
  { name: 'Old Market', image: '/places/Other.jpg' },
]

export default function DiscoverNewPlaces() {
  const scrollRef = useRef()

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Box
      bg="#121212"
      w="1135px"
      ml="200px"
      py={10}
      px={{ base: 4, md: 16 }}
      color="white"
      position="relative"
    >
      <Heading mb={6} fontWeight="800" fontSize="40px">
        Discover New Places
      </Heading>

      {/* Arrows Box */}
      <Box
        position="absolute"
        top="50%"
        left="0"
        right="0"
        transform="translateY(-50%)"
        zIndex="2"
        display="flex"
        justifyContent="space-between"
        px={2}
        pointerEvents="none"
      >
        <IconButton
          icon={<FaChevronLeft fontSize="18px" />}
          aria-label="Scroll Left"
          onClick={() => scroll('left')}
          bg="white"
          color="#D2AC71"
          borderRadius="20px"
          pointerEvents="auto"
          _hover={{ bg: 'whiteAlpha.500' }}
          display={{ base: 'none', md: 'flex' }}
        />
        <IconButton
          icon={<FaChevronRight fontSize="18px" />}
          aria-label="Scroll Right"
          onClick={() => scroll('right')}
          bg="white"
          color="#D2AC71"
          borderRadius="20px"
          pointerEvents="auto"
          _hover={{ bg: 'whiteAlpha.500' }}
          display={{ base: 'none', md: 'flex' }}
        />
      </Box>

      {/* Scrollable cards */}
      <HStack
        ref={scrollRef}
        spacing={20}
        overflowX="auto"
        overflowY="hidden"
        pb={2}
        css={{
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {places.map((place, index) => (
          <Box
            key={index}
            w="200px"  // ✅ updated from 240 to 210
            h="400px"
            borderRadius="24px"
            overflow="hidden"
            position="relative"
            flexShrink={0}
            bg="gray.200"
            
          >
            <Image
              src={place.image}
              alt={place.name}
              objectFit="cover"
              w="100%"
              h="100%"
            />
            <Text
              position="absolute"
              bottom="20px"
              left="20px"
              fontSize="20px"
              fontWeight="600"
              color="white"
              zIndex={1}
            >
              {place.name}
            </Text>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}
