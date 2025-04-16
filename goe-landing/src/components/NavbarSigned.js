'use client'

import {
  Box,
  Flex,
  IconButton,
  Text,
  Image,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  VStack,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import {
  FaGlobe,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { useState } from 'react'
import { useEffect, useRef } from 'react'

export default function NavbarSigned() {
    const [isSearchOpen, setSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [cities] = useState(['Cairo', 'Alexandria', 'Hurghada'])
    const searchRef = useRef(null)
    const toggleSearch = () => setSearchOpen(!isSearchOpen)
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (searchRef.current && !searchRef.current.contains(event.target)) {
            setSearchOpen(false)
          }
        }
    
        if (isSearchOpen) {
          document.addEventListener('mousedown', handleClickOutside)
        } else {
          document.removeEventListener('mousedown', handleClickOutside)
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }, [isSearchOpen])
      const filteredCities = cities.filter((city) =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
      )
  return (
    <>
      {/* Search Overlay */}
      {isSearchOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100%"
          h="100vh"
          bg="rgba(0, 0, 0, 0.7)"
          zIndex="999"
          display="flex"
          alignItems="start"
          justifyContent="center"
          pt="100px"
        >
          <VStack ref={searchRef} bg="#2D2D2D" p={6} borderRadius="20px" spacing={6} w="500px">
            <Flex
              bg="#2D2D2D"
              w="100%"
              align="center"
              borderRadius="1000px"
              px={4}
              py={2}
              border="1px solid #666"
            >
              <Search2Icon color="#D4AF74" mr={3} />
              <Input
                w="100%"
                placeholder="Search"
                variant="unstyled"
                color="#D4AF74"
                fontSize="20px"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                
              />
            </Flex>

            <Box w="100%" p={4} >
              <Text color="#D4AF74" fontWeight="bold" mb={4}>
                Most popular
              </Text>
              {filteredCities.map((city) => (            
                <Flex key={city} align="center" gap={3} mb={4}>
                  <Box
                    bg="#F6EEE5"
                    borderRadius="20px"
                    w="46px"
                    h="46px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mr={10}
                  >
                    <FaMapMarkerAlt color="#121212" />
                  </Box>
                  <Box>
                    <Text fontWeight="400" color="#F6EEE5" fontSize="15px">{city}</Text>
                    <Text fontSize="10px" fontWeight="500" color="#F6EEE5" opacity={0.5}>City in Egypt</Text>
                  </Box>
                </Flex>
              ))}
              <Text
                mt={6}
                textAlign="right"
                fontSize="sm"
                color="gray.300"
                cursor="pointer"
              >
                See all results for “search” →
              </Text>
            </Box>


          </VStack>
        </Box>
      )}

      {/* NAVBAR */}
      <Box bg="#121212" height="100px" py={2} className="sticky top-0 z-50">
        <Box mt="13px" maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
          <Flex align="center" gap={50}>
            <Box>
              <Image src="/logo.png" alt="GOE" height="40px" />
              <Text fontSize="24px" color="white" ml="8px" fontWeight="medium">
                Egy<Text as="span" color="#D4AF74">Book</Text>
              </Text>
            </Box>

            <Box>
              <Flex direction="row" align="center" color="white">
                <HStack gap={65}>
                  {/* Search icon */}
                  <Box w="40px" h="40px" borderRadius="20px" bg="#4444">
                    <IconButton
                      icon={<Search2Icon />}
                      variant="ghost"
                      color="#D2AC71"
                      fontSize="lg"
                      aria-label="Search"
                      onClick={toggleSearch}
                      top={5}
                      left={11}
                    />
                  </Box>

                  {/* Navigation Links */}
                  <Text color="#D4AF74" fontWeight="bold">GOE</Text>
                  <Text><Text as="span" color="#D4AF74" fontWeight="bold">Egy</Text>Book</Text>
                  <Text><Text as="span" color="#D4AF74" fontWeight="bold">Egy</Text>Explore</Text>
                  <Text><Text as="span" color="#D4AF74" fontWeight="bold">Egy</Text>Tales</Text>
                  <Text><Text as="span" color="#D4AF74" fontWeight="bold">Egy</Text>Treasure</Text>

                  {/* Language + User Controls */}
                  <Flex align="center" gap={10}>
                    <Box as={FaGlobe} />
                    <Text>EN</Text>

                    <Flex ml="40px" gap={20} align="center">
                      <IconButton
                        icon={<FaHeart />}
                        aria-label="Favorites"
                        bg="transparent"
                        color="white"
                        fontSize="20px"
                        _hover={{ color: '#D4AF74' }}
                      />
                      <IconButton
                        icon={<FaShoppingCart />}
                        aria-label="Cart"
                        bg="transparent"
                        color="white"
                        fontSize="20px"
                        _hover={{ color: '#D4AF74' }}
                      />

                      {/* User Dropdown */}
                      <Menu>
                        <MenuButton
                          as={Box}
                          w="45px"
                          h="45px"
                          bg="#D2AC71"
                          borderRadius="1000px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          cursor="pointer"
                          _hover={{ opacity: 0.9 }}
                        >
                          <FaUserCircle fontSize="50px" color="#F6EEE5" />
                        </MenuButton>

                        <MenuList
                          bg="#F6EEE5"
                          borderRadius="25px"
                          py={3}
                          px={3}
                          mt={2}
                          minW="143px"
                          h="190px"
                        >
                          <Box mt="10px" ml="14px">
                            <Text fontSize="16px" fontWeight="bold" color="#D4AF74" mb={2}>
                              My profile
                            </Text>
                            <MenuItem _hover={{ bg: 'transparent' }} fontSize="15px" fontWeight="400" color="#121212" mb={7}>
                              Saved bundles
                            </MenuItem>
                            <MenuItem _hover={{ bg: 'transparent' }} fontSize="15px" fontWeight="400" color="#121212" mb={7}>
                              Invite friends
                            </MenuItem>
                            <MenuItem _hover={{ bg: 'transparent' }} fontSize="15px" fontWeight="400" color="#121212" mb={7}>
                              Settings
                            </MenuItem>
                            <MenuItem _hover={{ bg: 'transparent' }} fontSize="15px" fontWeight="400" color="red">
                              Log out
                            </MenuItem>
                          </Box>
                        </MenuList>
                      </Menu>
                    </Flex>
                  </Flex>
                </HStack>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  )
}
