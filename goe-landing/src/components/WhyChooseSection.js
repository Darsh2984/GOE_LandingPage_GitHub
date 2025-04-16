'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'
import { FaMousePointer, FaPiggyBank } from 'react-icons/fa'
import { MdOutlineSmartDisplay } from 'react-icons/md'

export default function WhyChooseEgyBook() {
  return (
    <Box
      bg="#121212"
      w="1135px"
      ml="200px"
      py={16}
      px={{ base: 4, md: 16 }}
      color="white"
    >
      {/* Heading */}
      <Heading
        fontSize="40px"
        fontWeight="800"
        mb={12}
      >
        Why choose <Text as="span" color="#D2AC71">Egy</Text>Book?
      </Heading>

      {/* Grid Items */}
      <SimpleGrid columns={[1, 1, 3]} spacing={10}>
        {/* Card 1 */}
        <VStack spacing={4} align="start">
          <Icon as={FaMousePointer} fontSize="40px" color="#2E8A5C" />
          <Text fontSize="20px" fontWeight="700">
            <Text as="span" color="#D2AC71">Seamless</Text> & <Text as="span" color="#2E8A5C">Smart</Text> Booking
          </Text>
          <Text fontSize="17px" opacity={0.85}>
            Quick, user-friendly platform<br />
            that simplifies the reservation process
          </Text>
        </VStack>

        {/* Card 2 */}
        <VStack spacing={4} align="start">
          <Icon as={MdOutlineSmartDisplay} fontSize="40px" color="#2E8A5C" />
          <Text fontSize="20px" fontWeight="700">
            <Text as="span" fontStyle="italic" color="#2E8A5C">Immersive</Text> VR Previews
          </Text>
          <Text fontSize="17px" opacity={0.85}>
            Explore hotels and rooms in<br />
            360° before you book—giving<br />
            you total confidence.
          </Text>
        </VStack>

        {/* Card 3 */}
        <VStack spacing={4} align="start">
          <Icon as={FaPiggyBank} fontSize="40px" color="#2E8A5C" />
          <Text fontSize="20px" fontWeight="700">
            <Text as="span" color="#2E8A5C">Exclusive</Text> Best-Price Deals
          </Text>
          <Text fontSize="17px" opacity={0.85}>
            Save more with special offers<br />
            and real-time price comparisons.
          </Text>
        </VStack>
      </SimpleGrid>
    </Box>
  )
}
