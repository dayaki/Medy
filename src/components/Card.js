import React from 'react';
import styled from 'styled-components/native';
import {ForwardIcon, PlayIcon} from '../../assets/icons';
import {Colors} from '../constants/colors';

const Card = ({title, text, image, onPress, style, play}) => {
  return (
    <CardWrapper style={{...style}}>
      <Image source={image} resizeMode="cover">
        <CardTitle>{title}</CardTitle>
        <CardTime>{text}</CardTime>
        <CardBtn activeOpacity={0.8} onPress={onPress}>
          {play ? (
            <PlayIcon width={18} height={18} fill="#fff" />
          ) : (
            <ForwardIcon width={18} height={18} />
          )}
        </CardBtn>
      </Image>
    </CardWrapper>
  );
};

// imageStyle={{width: 211, height: 187, left: 100}}

const CardWrapper = styled.View`
  margin-bottom: 30px;
  width: 100%;
  height: 198px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  background: transparent;
`;
const Image = styled.ImageBackground`
  width: 100%;
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
