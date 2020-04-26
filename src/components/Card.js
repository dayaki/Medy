import React from 'react';
import styled from 'styled-components/native';
import {ForwardIcon} from '../../assets/icons';
import {Colors} from '../constants/colors';

const Card = ({title, text, image, onPress}) => {
  return (
    <CardWrapper>
      <Image
        source={image}
        resizeMode="cover"
        imageStyle={{width: 211, height: 187, left: 100}}>
        <CardTitle>{title}</CardTitle>
        <CardTime>{text}</CardTime>
        <CardBtn activeOpacity={0.8} onPress={onPress}>
          <ForwardIcon width={18} height={18} />
        </CardBtn>
      </Image>
    </CardWrapper>
  );
};

const CardWrapper = styled.View`
  margin-bottom: 30px;
  width: 315px;
  height: 198px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  background: transparent;
`;
const Image = styled.ImageBackground`
  width: 315px;
  height: 198px;
  padding: 40px 20px 20px 25px;
  background: ${Colors.white};
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
`;
const CardTitle = styled.Text`
  color: ${Colors.darkblue};
  font-family: 'Avenir-Medium';
  font-size: 19px;
  line-height: 25px;
`;
const CardTime = styled.Text`
  color: ${Colors.darkblue};
  font-family: 'Avenir-Book';
  font-size: 15px;
  line-height: 20px;
  margin: 16px 0px 31px;
`;
const CardBtn = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${Colors.black};
  justify-content: center;
  align-items: center;
`;

export default Card;
