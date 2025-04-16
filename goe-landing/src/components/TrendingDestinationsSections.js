'use client'

import {
  Box,
  Image,
  Text,
  Heading,
  IconButton,
  HStack,
  Button,
} from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useRef, useEffect, useState } from 'react'

const destinations = [
  {
    name: 'Cairo',
    description: 'Unveil secrets of ancient wonders.',
    image: '/destinations/Cairo.jpg',
    gradient: 'linear-gradient(to bottom right, #DD8145 10%, rgba(0, 0, 0, 0.01) 90%)',
  },
  {
    name: 'Hurghada',
    description: 'Sunshine, beaches, and vibrant reefs.',
    image: '/destinations/Hurghada.jpg',
    gradient: 'linear-gradient(to bottom right, #2C87B5 10%, rgba(0, 0, 0, 0.01) 90%)',
  },
  {
    name: 'Sharm El-Sheikh',
    description: 'Dive into breathtaking underwater views.',
    image: '/destinations/Sharm El-sheikh.jpg',
    gradient: 'linear-gradient(to bottom right, #8B2B36 10%, rgba(0, 0, 0, 0.01) 90%)',
  },
  {
    name: 'Luxor & Aswan',
    description: 'Journey through timeless historic treasures.',
    image: '/destinations/Luxor & Aswan.jpg',
    gradient: 'linear-gradient(to bottom right, #8B2B36 10%, rgba(0, 0, 0, 0.01) 90%)',
  },
]

export default function TrendingDestinations() {
  const scrollRef = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      })
    }
  }

  if (!mounted) return null

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
        Trending Destinations
      </Heading>

      {/* Arrows */}
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

      {/* Scrollable Cards */}
      <HStack
        ref={scrollRef}
        spacing={6}
        overflowX="auto"
        overflowY="hidden"
        css={{
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        pb={2}
      >
        {destinations.map((place, index) => (
          <Box
            key={index}
            minW="450px"
            h="360px"
            borderRadius="30px"
            overflow="hidden"
            position="relative"
            flexShrink={0}
            mr="30px"
          >
            {/* Background image */}
            <Image
              src={place.image}
              alt={place.name}
              objectFit="cover"
              w="100%"
              h="100%"
              position="absolute"
              zIndex={0}
            />

            {/* ✅ Gradient Overlay FIXED */}
            <Box
                position="absolute"
                w="100%"
                h="100%"
                zIndex={1}
                style={{
                    backgroundImage: place.gradient,
                    backgroundSize: "cover",
                    backgroundPosition: 'center',
                }}
            />

            {/* Content */}
            <Box
              position="absolute"
              bottom={5}
              left={5}
              right={5}
              zIndex={2}
            >
              <Text fontSize="32px" fontWeight="bold">
                {place.name}
              </Text>
              <Text fontSize="18px" mt={1} mb={4} lineHeight="short">
                {place.description}
              </Text>
              <Button
                bg="white"
                color="black"
                fontWeight="bold"
                w="200px"
                h="45px"
                borderRadius="1000px"
                px={6}
                py={5}
                fontSize="16px"
                _hover={{ bg: 'gray.200' }}
              >
                See Hotels
              </Button>
            </Box>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}
