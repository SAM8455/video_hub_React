import React from 'react';
import {
  Button,
  Container,
  Input,
  VStack,
  Heading,
  Text,
  Avatar
} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing="8"
          w={['full', '96']}
          m="auto"
          my="16"
        >
          <Heading>Video HUB</Heading>

          <Avatar alignItems={'center'}  />

          <Input
            placeholder="Name"
            type={'text'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder="Email"
            type={'email'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder="Passeword"
            type={'password'}
            required
            focusBorderColor="purple.500"
          />

          

          <Button colorScheme={'purple'} type="submit">
            Sign up 
          </Button>

          <Text textAlign={'right'}>
            Already sign up ?{'  '}
            <Button variant={'link'} colorScheme="purple">
              <Link to={'/login'}>Log in</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
