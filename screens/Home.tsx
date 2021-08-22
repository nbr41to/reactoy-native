import React from 'react';
import styled from 'styled-components/native';
import { Button, Text, Center } from 'native-base';

export const HomeScreen = ({ navigation }: any) => {
  return (
    <StyledHomeScreen>
      <Center>
        <Text>Home</Text>
        <Button onPress={() => navigation.push('About')}>About</Button>
        <Button onPress={() => navigation.push('Game')}>Game</Button>
      </Center>
    </StyledHomeScreen>
  );
};

const StyledHomeScreen = styled.View`
  flex: 1;
  background-color: skyblue;
  align-items: center;
  justify-content: center;
`;
