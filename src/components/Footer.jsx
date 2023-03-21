import React from 'react'
import { Box, Stack, VStack, Heading, HStack, Button ,Input ,Text } from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH="40" p={'16'} color="white">
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w="full">
          <Heading size={'md'} textTransform="uppercase" textAlign={['center','left']} >
            Subscribe to get update
          </Heading>

          <HStack borderBottom={'2px solid white'} py="1">
            <Input
              placeholder="Enter Email Here ...."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />

            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius="0 20px 20px 0"
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform="uppercase" textAlign={'center'}>
            VIDEO HUB
          </Heading>

          <Text>All Right Recived</Text>
        </VStack>

        <VStack w={'full'} borderRight={['none', '1px solid white']}>
          <Heading size={'md'} textTransform="uppercase" textAlign={'center'}>
            social media
          </Heading>

          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'black'} href="https://youtube.com/6packprogrammer">
              Youtube
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'black'} href="https://instagram.com/sanskaralok">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'purple'}>
            <a target={'black'} href="https://github.com/sanskaralok">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer