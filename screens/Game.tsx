import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'native-base';
import { MemoryGame } from '../components/MemoryGame';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DemoGame } from '../components/DemoGame';
const Tab = createBottomTabNavigator();

export const GameScreen = () => {
  return (
    <StyledGameScreen>
      <Text>Game</Text>
      <Tab.Navigator>
        <Tab.Screen
          name='DemoGame'
          component={DemoGame}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name='MemoryGame' component={MemoryGame} />
      </Tab.Navigator>
    </StyledGameScreen>
  );
};

const StyledGameScreen = styled.View`
  flex: 1;
`;
