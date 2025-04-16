'use client'

import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  Button,
  Divider,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import {
  MdLocationOn,
  MdCalendarToday,
  MdPeople
} from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'
import dayjs from 'dayjs'
import DateRangePickerOverlay from './DateRangePickerOverlay'

export default function HeroSection() {
  const {
    isOpen: isLocationOpen,
    onToggle: onToggleLocation,
    onClose: closeLocation,
  } = useDisclosure()

  const {
    isOpen: isDateOpen,
    onOpen: openDate,
    onClose: closeDate,
  } = useDisclosure()

  const {
    isOpen: isGuestsOpen,
    onToggle: toggleGuests,
    onClose: closeGuests
  } = useDisclosure()

  const locationMenuRef = useRef(null)
  const guestsMenuRef = useRef(null)

  const [selectedLocation, setSelectedLocation] = useState('Cairo, Egypt')
  const [locations] = useState(['Cairo', 'Hurghada', 'Sharm El-Sheikh', 'Luxor & Aswan'])
  const [dateRange, setDateRange] = useState({ start: null, end: null })

  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(1)
  const [rooms, setRooms] = useState(1)

  const maxTravelers = 16

  const totalTravelers = adults + children

  const handleSelectLocation = (city) => {
    setSelectedLocation(`${city}, Egypt`)
    closeLocation()
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (locationMenuRef.current && !locationMenuRef.current.contains(event.target)) closeLocation()
      if (guestsMenuRef.current && !guestsMenuRef.current.contains(event.target)) closeGuests()
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [closeLocation, closeGuests])

  return (
    <Box position="relative" w="100%" h="540px" bgImage="url('/HeroBG.png')" bgSize="cover" bgPosition="center">
      <Box position="absolute" top="0" left="0" w="100%" h="100%" bg="black" opacity={0.6} zIndex={1} />

      <Flex position="absolute" top="0" left="200px" w="100%" h="100%" zIndex={2} align="center" px={{ base: 6, md: 16 }}>
        <VStack align="start" spacing={4} color="white" maxW="800px">
          <Flex align="center" gap={2}>
            <Icon as={MdLocationOn} fontSize="lg" />
            <Text fontSize="20px" fontWeight="medium">Egypt</Text>
          </Flex>

          <Text fontSize="40px" fontWeight="bold" lineHeight="short">
            Hey! <br /> Tell us where you want to stay
          </Text>

          <Text fontSize="24px" ml="5px" fontWeight="medium">
            Book 450+ Curated Egyptian Hotels
          </Text>

          {/* Search Bar */}
          <Box w="1060px" h="71px" bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(5px)" borderRadius="1000px" display="flex" alignItems="center" px={6} position="relative" justifyContent="space-between">
            
            {/* 📍 Location */}
            <Box w="250px" pr={4}>
              <Flex align="center" gap={2} position="relative" ref={locationMenuRef}>
                <Icon as={MdLocationOn} color="#D2AC71" fontSize="20px" cursor="pointer" onClick={onToggleLocation} ml="30px" />
                <Text fontWeight="medium" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">{selectedLocation}</Text>

                {isLocationOpen && (
                  <Box position="absolute" top="50px" left="-30px" w="300px" bg="#444" borderRadius="20px" p={4} zIndex="10">
                    {locations.map((city, index) => (
                      <Flex key={index} align="center" py={3} px={3} borderRadius="15px" cursor="pointer" _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }} onClick={() => handleSelectLocation(city)}>
                        <Box bg="#F6EEE5" borderRadius="20px" w="46px" h="46px" display="flex" justifyContent="center" alignItems="center" mr={4}>
                          <FaMapMarkerAlt color="#121212" />
                        </Box>
                        <Box>
                          <Text fontWeight="400" color="white" fontSize="15px">{city}</Text>
                          <Text fontSize="10px" fontWeight="500" color="white" opacity={0.5}>City in Egypt</Text>
                        </Box>
                      </Flex>
                    ))}
                  </Box>
                )}
              </Flex>
            </Box>

            <Divider orientation="vertical" height="24px" borderColor="rgba(255,255,255,0.3)" />

            {/* 📅 Date */}
            <Box position="relative">
              <Flex align="center" gap={2} onClick={openDate} cursor="pointer">
                <Icon as={MdCalendarToday} color="#D2AC71" fontSize="20px" />
                <Text whiteSpace="nowrap">
                  {dateRange.start && dateRange.end
                    ? `${dateRange.start.format('D MMM')} - ${dateRange.end.format('D MMM YYYY')}`
                    : 'Select Dates'}
                </Text>
              </Flex>

              {isDateOpen && (
                <DateRangePickerOverlay
                  onClose={closeDate}
                  onSelect={(range) => {
                    setDateRange({
                      start: dayjs(range.start),
                      end: dayjs(range.end),
                    })
                  }}
                />
              )}
            </Box>

            <Divider orientation="vertical" height="24px" borderColor="rgba(255,255,255,0.3)" />

            {/* 👤 Guests */}
            <Box position="relative" ref={guestsMenuRef}>
              <Flex align="center" gap={2} onClick={toggleGuests} cursor="pointer">
                <Icon as={MdPeople} color="#D2AC71" fontSize="20px" />
                <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                  {`${adults} Adult${adults > 1 ? 's' : ''}, ${children} Child${children !== 1 ? 'ren' : ''}, ${rooms} Room${rooms > 1 ? 's' : ''}`}
                </Text>
              </Flex>

              {isGuestsOpen && (
                <Box
                  position="absolute"
                  top="50px"
                  right={0}
                  w="316px"
                  h="261px"
                  bg="#555"
                  p={5}
                  borderRadius="30px"
                  zIndex="999"
                >
                  {[
                    { label: 'Adults', sub: 'Age 18 or above', value: adults, set: setAdults, min: 1 },
                    { label: 'Children', sub: 'Under 18', value: children, set: setChildren, min: 0 },
                    { label: 'Rooms', sub: '', value: rooms, set: setRooms, min: 1 },
                  ].map(({ label, sub, value, set, min }) => (
                    <Flex key={label} justify="space-between" align="center" mb={sub ? 6 : 4}>
                      <Box mt="20px" ml="10px">
                        <Text fontSize="16px" fontWeight="600">{label}</Text>
                        {sub && (
                          <Text fontSize="12px" fontWeight="500" color="#B7B7B7">
                            {sub}
                          </Text>
                        )}
                      </Box>
                      <Flex gap={10} align="center" mt={10} mr={10}>
                        <Button
                          isDisabled={value <= min}
                          onClick={() => set(value - 1)}
                          borderRadius="12px"
                          size="sm"
                          w="35px"
                          h="35px"
                          border="1px solid gray"
                          bg="transparent"
                          color={value <= min ? "#888888" : "white"}
                          _hover={{ bg: '#333' }}
                        >
                          −
                        </Button>
                        <Text fontSize="lg">{value}</Text>
                        <Button
                          isDisabled={label !== 'Rooms' && totalTravelers >= maxTravelers}
                          onClick={() => set(value + 1)}
                          borderRadius="12px"
                          size="sm"
                          w="35px"
                          h="35px"
                          border="1px solid gray"
                          bg="transparent"
                          color="#D4AF74"
                          _hover={{ bg: '#333' }}
                        >
                          +
                        </Button>
                      </Flex>
                    </Flex>
                  ))}

                  <Text fontSize="sm" color="gray.300" mt={30} ml={10}>
                    You can search for up to 16 travelers
                  </Text>
                </Box>
              )}
            </Box>



            {/* ✅ Button */}
            <Box>
              <Button bg="#2F6B4F" color="white" borderRadius="1000px" px={6} w="204px" h="54px" _hover={{ bg: '#295c45' }}>
                Explore Stays
              </Button>
            </Box>
          </Box>
        </VStack>
      </Flex>
    </Box>
  )
}
