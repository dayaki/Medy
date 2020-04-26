import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../constants/colors';
import {BackwardIcon} from '../../assets/icons';

const Header = ({
  title,
  icon,
  onPress,
  backPress,
  back = null,
  backonly = null,
  style,
}) => (
  <Wrapper style={{...style}}>
    {back === null ? (
      <Title>{title}</Title>
    ) : (
      <Button activeOpacity={0.8} onPress={backPress}>
        <BackwardIcon width={28} height={28} />
      </Button>
    )}
    {!backonly && (
      <Button activeOpacity={0.8} onPress={onPress}>
        {icon}
      </Button>
    )}
  </Wrapper>
);

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* padding: 0px 30px; */
`;
const Title = styled.Text`
  font-family: 'Avenir-Heavy';
  font-size: 34px;
  color: ${Colors.darkblue};
`;
const Button = styled.TouchableOpacity``;

export default Header;
