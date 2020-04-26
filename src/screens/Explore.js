import React from 'react';
import styled from 'styled-components/native';
import {Header} from '../components';
import {FilterIcon, ForwardIcon} from '../../assets/icons';
import {Colors} from '../constants/colors';

const Explore = () => {
  return (
    <Container>
      <Header title={'Explore'} icon={<FilterIcon width={28} height={28} />} />
      <Cards>
        <CardWrapper>
          <Card
            source={require('../../assets/images/human-1.png')}
            resizeMode="cover"
            imageStyle={{width: 211, height: 187, left: 100}}>
            <CardTitle>Anxiety Problems</CardTitle>
            <CardTime>20 mins</CardTime>
            <CardBtn>
              <ForwardIcon width={18} height={18} />
            </CardBtn>
          </Card>
        </CardWrapper>

        <CardWrapper>
          <Card
            source={require('../../assets/images/human-2.png')}
            resizeMode="cover"
            imageStyle={{width: 211, height: 187, left: 100, top: 30}}>
            <CardTitle>Sleep better</CardTitle>
            <CardTime>15 mins</CardTime>
            <CardBtn>
              <ForwardIcon width={18} height={18} />
            </CardBtn>
          </Card>
        </CardWrapper>

        <CardWrapper>
          <Card
            source={require('../../assets/images/human-3.png')}
            resizeMode="cover"
            imageStyle={{width: 211, height: 187, left: 100, top: 30}}>
            <CardTitle>Creative Block</CardTitle>
            <CardTime>45 mins</CardTime>
            <CardBtn>
              <ForwardIcon width={18} height={18} />
            </CardBtn>
          </Card>
        </CardWrapper>
      </Cards>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  padding: 30px;
  padding-top: 100px;
  background: ${Colors.lightgray};
`;
const Cards = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;
const CardWrapper = styled.View`
  margin-bottom: 30px;
  width: 315px;
  height: 198px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  background: transparent;
`;
const Card = styled.ImageBackground`
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

export default Explore;
