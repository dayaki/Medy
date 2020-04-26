import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../constants/colors';

const Header = ({title, icon, onPress}) => (
  <Wrapper>
    <Title>{title}</Title>
    <Button activeOpacity={0.8} onPress={onPress}>
      {icon}
    </Button>
  </Wrapper>
);

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
`;
const Title = styled.Text`
  font-family: 'Avenir-Heavy';
  font-size: 34;
  color: ${Colors.darkblue};
`;
const Button = styled.TouchableOpacity``;

export default Header;
