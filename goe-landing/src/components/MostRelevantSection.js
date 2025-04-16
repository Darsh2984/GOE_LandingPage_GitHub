'use client'

import {
  Box,
  Flex,
  Image,
  Text,
  HStack,
  Icon,
  Heading,
  IconButton,
} from '@chakra-ui/react'
import { FaStar, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useRef } from 'react'
import { FaRegHeart } from 'react-icons/fa'


const hotelData = [
  {
    image: '/hotel1.jpeg',
    location: 'Soma Bay',
    title: 'Kempinski Hotel Soma Bay',
    price: '$214',
    rating: 4.7,
    reviews: 1274,
  },
  {
    image: '/hotel2.png',
    location: 'Cairo',
    title: 'JW Marriott Hotel Cairo',
    price: '$194',
    rating: 4.6,
    reviews: 2274,
  },
  {
    image: '/hotel1.jpeg',
    location: 'Soma Bay',
    title: 'Kempinski Hotel Soma Bay',
    price: '$214',
    rating: 4.7,
    reviews: 1274,
  },
]

export default function MostRelevantSection() {
  const scrollRef = useRef()

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -500 : 500,
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
      position="relative" // Needed for arrows
    >
      <Heading mb={6} fontWeight="800" fontSize="40px">
        The Most Relevant
      </Heading>

      {/* Left Arrow */}
      <IconButton
        icon={<FaChevronLeft />}
        position="absolute"
        top="50%"
        left="-10px"
        transform="translateY(-50%)"
        zIndex="2"
        aria-label="Scroll Left"
        onClick={() => scroll('left')}
        bg="white"
        color="#D2AC71"
        borderRadius="20px"
        _hover={{ bg: 'whiteAlpha.500' }}
        display={{ base: 'none', md: 'flex' }}
        fontSize="30px"
      />

      {/* Right Arrow */}
      <IconButton
        icon={<FaChevronRight />}
        position="absolute"
        top="50%"
        right="-10px"
        transform="translateY(-50%)"
        zIndex="2"
        aria-label="Scroll Right"
        onClick={() => scroll('right')}
        bg="white"
        color="#D2AC71"
        borderRadius="20px"
        _hover={{ bg: 'whiteAlpha.500' }}
        display={{ base: 'none', md: 'flex' }}
        fontSize="30px"

      />

      <HStack
        ref={scrollRef}
        justify="space-between"
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
        {hotelData.map((hotel, index) => (
          <Box
            key={index}
            bg="white"
            color="black"
            borderRadius="42px"
            w="450px"
            h="394px"
            overflow="hidden"
            flexShrink={0}
            position="relative"
          >
            {/* Image section */}
            <Box position="relative">
              <Image
                src={hotel.image}
                alt={hotel.title}
                w="100%"
                h="300px"
                objectFit="cover"
                borderRadius="42px"
              />

              {/* Location label */}
              <Text
                position="absolute"
                top={20}
                left={20}
                bg="white"
                px={10}
                py={1}
                borderRadius="1000px"
                fontWeight="500px"
                fontSize="15px"
                display="inline-flex"
                alignItems="center"
                color="#346D52"
              >
                {hotel.location}
              </Text>

              {/* Heart Icon */}
              <Box
                position="absolute"
                top={20}
                right={30}
                bg="white"
                p={1.5}
                w="45px"
                h="45px"
                borderRadius="100px"
                border="1px solid #D2AC71"

                

              >
                <Icon  mt="10px" ml="8px" as={FaRegHeart} color="black" fontSize="25px" />
              </Box>
            </Box>

            {/* Hotel Info */}
            <Box p={4} ml="20px">
              <Flex justify="space-between" align="center" mb={1}>
                <Text fontWeight="bold" fontSize="18px" noOfLines={1}>
                  {hotel.title}
                </Text>

                <HStack mr="15px" spacing={1} color="yellow.400" fontSize="sm">
                  <Icon as={FaStar} color="#D2AC71" />
                  <Text color="#121212" fontWeight="500" fontSize="18px">
                    {hotel.rating}{' '}
                    <Text as="span" color="#121212" opacity={0.75}>
                      ({hotel.reviews.toLocaleString()})
                    </Text>
                  </Text>
                </HStack>
              </Flex>

              <Text fontSize="16px" color="#121212">
                From {hotel.price} per person
              </Text>
            </Box>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}
