import React from 'react';
import { Box, Button, Center, Text } from 'native-base';
import styled from 'styled-components/native';

export const DemoGame = () => {
  return (
    <StyledDemoGame>
      <Text>Demo Button</Text>
      <StyledBox onPress={() => {}}>NativeBase Button</StyledBox>
      <StyleTouchableOpacity onPress={() => {}}>
        <Text>RN TouchableOpacity</Text>
      </StyleTouchableOpacity>
      <StyledButton title='RN Button' onPress={() => {}} />
    </StyledDemoGame>
  );
};

const StyledDemoGame = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledCode = styled.Text`
  justify-content: center;
  align-items: center;
  background-color: #444;
  color: #fff;
  padding: 12px 20px;
`;
const StyledButton = styled.Button`
  flex: 1;
  background-color: tomato;
  width: 100;
`;
const StyledBox = styled(Button)`
  border-radius: 12;
  margin: 12px 0;
`;
const StyleTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 12px;
  padding: 12px;
  border-radius: 8;
  background-color: lime;
  width: 150;
  height: 50;
`;
