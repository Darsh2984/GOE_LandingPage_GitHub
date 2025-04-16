'use client'

import {
  Box,
  Text,
  Grid,
  IconButton,
  Flex,
  Button,
  useOutsideClick,
} from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState, useRef } from 'react'
import dayjs from 'dayjs'

export default function DateRangePickerOverlay({ onClose, onSelect }) {
  const ref = useRef()
  useOutsideClick({ ref, handler: onClose })

  const today = dayjs()
  const [monthOffset, setMonthOffset] = useState(0)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const startOfMonth = today.add(monthOffset, 'month').startOf('month')
  const secondMonth = startOfMonth.add(1, 'month')

  const handleDayClick = (date) => {
    if (date.isBefore(today, 'day')) return
    if (!startDate || (startDate && endDate)) {
      setStartDate(date)
      setEndDate(null)
    } else if (date.isAfter(startDate, 'day')) {
      setEndDate(date)
    }
  }

  const isSameDay = (a, b) => a && b && a.isSame(b, 'day')
  const isInRange = (d) =>
    startDate && endDate && d.isAfter(startDate, 'day') && d.isBefore(endDate, 'day')

  const renderMonth = (monthStart) => {
    const days = []
    const firstDay = monthStart.day()
    const daysInMonth = monthStart.daysInMonth()
  
    for (let i = 0; i < firstDay; i++) days.push(null)
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(monthStart.date(i).clone())
    }
  
    return (
      <Box>
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="white"
          mb={2}
          textAlign="center" 
        >
          {monthStart.format('MMMM YYYY')}
        </Text>
  
        <Grid templateColumns="repeat(7, 1fr)" gap={10}>
          {['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'].map((d) => (
            <Text key={d} color="gray.400" textAlign="center">
              {d}
            </Text>
          ))}
  
  {days.map((date, i) => {
  const isStart = isSameDay(date, startDate)
  const isEnd = isSameDay(date, endDate)
  const inRange = date && isInRange(date)
  const isTodayOrPast = date && date.isBefore(today, 'day')

  return (
    <Box
      key={i}
      position="relative"
      w="42px"
      h="42px"
      borderRadius={
        isStart ? '12px 12px 12px 12px' :
        isEnd ? '12px 12px 12px 12px' :
        '12px'
      }
      bg={
        isTodayOrPast
          ? '#DAD2CA'
          : isStart || isEnd
          ? '#EBDDBD'
          : inRange
          ? '#EBDDBD'
          : '#F6EEE5'
      }
      color={
        isTodayOrPast
          ? '#969696'
          : isStart || isEnd
          ? 'white'
          : inRange
          ? '#C58F4A'
          : 'black'
      }
      border={
        isTodayOrPast || isStart || isEnd || inRange
          ? 'none'
          : '1px solid #D2AC71'
      }
      textDecoration={isTodayOrPast ? 'line-through' : 'none'}
      fontWeight="500"
      fontSize="18px"
      cursor={date ? 'pointer' : 'default'}
      overflow="hidden" // 🔁 prevents triangle overflow
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{bg: "grey"}}
      onClick={() => date && handleDayClick(date)}
    >
      <Box position="relative" w="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
        <Text zIndex={1}>
        {date ? date.date() : ''}

        </Text>

        {/* Triangle for Start */}
        {isStart && (
          <Box
            position="absolute"
            bottom="-6px"
            left={18}
            transform="translateX(-50%) rotate(-90deg)"
            w="0"
            h="0"
            top={-1}
            borderLeft="45px solid transparent"
            borderRight="45px solid transparent"
            borderTop="45px solid #D2AC71"
          />
        )}

        {/* Triangle for End */}
        {isEnd && (
          <Box
            position="absolute"
            bottom="-6px"
            left={24}
            transform="translateX(-50%) rotate(90deg)"
            w="0"
            h="0"
            top={0}
            borderLeft="45px solid transparent"
            borderRight="45px solid transparent"
            borderTop="45px solid #D2AC71"
          />
        )}
      </Box>
    </Box>
  )
})}


        </Grid>
      </Box>
    )
  }
  

  return (
    <Box
      position="fixed"
      top="100px"
      left="200px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="9999"
    >
      <Box
        bg="#444"
        p={6}
        borderRadius="30px"
        ref={ref}
        w="900px"
        h="400px"
      >
        <Flex justify="space-between" mb={4}>
          <IconButton
            icon={<FaChevronLeft />}
            onClick={() => setMonthOffset(monthOffset - 1)}
            bg="transparent"
            color="white"
            _hover={{ bg: '#333' }}
            aria-label="Previous"
            mt={3}
          />
          <IconButton
            icon={<FaChevronRight />}
            onClick={() => setMonthOffset(monthOffset + 1)}
            bg="transparent"
            color="white"
            _hover={{ bg: '#333' }}
            aria-label="Next"
          />
        </Flex>

        <Flex gap={70} justify="center">
          {renderMonth(startOfMonth)}
          {renderMonth(secondMonth)}
        </Flex>

        {startDate && endDate && (
          <Box mt={6} textAlign="center">
            <Text mb={3} fontSize="sm" color="white">
              Selected: {startDate.format('D MMM')} – {endDate.format('D MMM YYYY')}
            </Text>
            <Button
              bg="#D4AF74"
              width="100px"
              color="black"
              borderRadius="10px"
              _hover={{ bg: '#c9a65f' }}
              onClick={() => {
                onSelect({ start: startDate, end: endDate })
                onClose()
                }}
            >
              Done
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}
