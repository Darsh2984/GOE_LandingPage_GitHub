'use client'

import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  HStack,
  VStack,
  Link,
  IconButton,
} from '@chakra-ui/react'
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaXTwitter,
  FaLinkedinIn,
} from 'react-icons/fa6'

export default function FooterSection() {
  return (
    <Box
      style={{
        backgroundImage: 'linear-gradient(to bottom, #0E0C0A, #1A1310)'
      }}
      color="white"
      w="100%"
      py={12}
      px={{ base: 4, md: 16 }}
      borderTopRadius="2xl"
    >
      <Flex justify="space-between" ml="200px" align="flex-start" wrap="wrap">
        {/* Left Section */}
        <VStack align="flex-start" spacing={10}>
          <Image src="/logo.png" alt="GOE" height="70px" objectFit="contain" />
          <Text fontSize="24px" fontWeight="semibold">
            Lorem, Ipsum Lorem, Ipsum <br /> Lorem, Ipsum or less.
          </Text>

          <Button
            w="200px"
            h="45px"
            bg="#D4AF74"
            color="white"
            borderRadius="1000px"
            px={6}
            py={5}
            fontWeight="bold"
            fontSize="18px"
            _hover={{ bg: '#c39b5f' }}
          >
            Discover More
          </Button>

          <HStack spacing={30} fontSize="16px" pt={6}>
            <Link href="#" color="white">Home</Link>
            <Link href="#"><Text as="span" color="#D4AF74" fontWeight="bold">Egy</Text>Book</Link>
            <Link href="#"><Text as="span" color="#D4AF74" fontWeight="bold">Egy</Text>Explore</Link>
            <Link href="#"><Text as="span" color="#D4AF74" fontWeight="bold">Egy</Text>Tales</Link>
            <Link href="#"><Text as="span" color="#D4AF74" fontWeight="bold">Egy</Text>Treasure</Link>
          </HStack>
        </VStack>

        {/* Right Section */}
        <VStack align="center" spacing={6}>
        <HStack spacing={7} mr="100px">
        {[FaInstagram, FaFacebookF, FaTiktok, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
            <IconButton
            key={i}
            icon={<Icon />}
            aria-label="social"
            bg="#D4AF74"
            color="white"
            fontSize="18px"
            _hover={{ bg: '#c39b5f' }}
            w="60px"
            h="60px"
            borderRadius="100px"
            />
        ))}
        </HStack>

          <Text fontSize="16px" textAlign="right" mt={2}>
            Copyright Gates of Egypt © 2024<br />
            All rights reserved
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}
