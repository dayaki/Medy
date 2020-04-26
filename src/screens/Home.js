import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {Header} from '../components';
import {
  FilterIcon,
  AchieveIcon,
  ForwardIcon,
  BriefcaseIcon,
  JournalIcon,
} from '../../assets/icons';
import {Colors} from '../constants/colors';

const Home = ({navigation}) => {
  const openCategory = type => {
    navigation.navigate('Category', {type});
  };

  const openPreview = () => {
    navigation.navigate('Preview');
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header
        title={'Dashboard'}
        icon={<FilterIcon width={28} height={28} />}
        style={{paddingHorizontal: 30}}
      />
      <InfoCard>
        <Icon>
          <AchieveIcon width={28} height={28} />
        </Icon>
        <TextWrapper>
          <InfoTitle>Daily Relaxation</InfoTitle>
          <InfoText>
            It is the right time to relax and get rid of all the stress.
          </InfoText>
        </TextWrapper>
      </InfoCard>

      <Section>
        <SectionTitle>Recommended</SectionTitle>
        <Slider showsHorizontalScrollIndicator={false} horizontal>
          <Card
            source={require('../../assets/images/human-1.png')}
            resizeMode="cover"
            imageStyle={{left: 95, top: 70}}>
            <CardTitle>Anxiety Problems</CardTitle>
            <CardTime>20 mins</CardTime>
            <CardBtn activeOpacity={0.8} onPress={openPreview}>
              <ForwardIcon width={16} height={16} />
            </CardBtn>
          </Card>

          <Card
            source={require('../../assets/images/human-2.png')}
            resizeMode="cover"
            imageStyle={{left: 95, top: 70}}>
            <CardTitle>Sleep better</CardTitle>
            <CardTime>15 mins</CardTime>
            <CardBtn>
              <ForwardIcon width={16} height={16} />
            </CardBtn>
          </Card>
        </Slider>
      </Section>

      <Section bottom>
        <SectionTitle>Categories</SectionTitle>
        <Slider showsHorizontalScrollIndicator={false} horizontal>
          <Category activeOpacity={0.8} onPress={() => openCategory('Job')}>
            <BriefcaseIcon width={24} height={24} />
            <CategoryName>Job Stress</CategoryName>
            <Count>38 sessions</Count>
          </Category>
          <Category activeOpacity={0.8} onPress={() => openCategory('Mind')}>
            <JournalIcon width={24} height={24} />
            <CategoryName>Mind Journal</CategoryName>
            <Count>19 sessions</Count>
          </Category>
        </Slider>
      </Section>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  padding-top: 100px;
  background: ${Colors.lightgray};
`;
const InfoCard = styled.View`
  flex-direction: row;
  align-items: center;
  width: 85%;
  background: ${Colors.white};
  padding: 20px 20px;
  align-self: center;
  margin: 30px 0px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.02);
`;
const Icon = styled.View`
  width: 58px;
  height: 58px;
  border-radius: 29px;
  background: ${Colors.black};
  justify-content: center;
  align-items: center;
`;
const TextWrapper = styled.View`
  width: 70%;
  margin-left: 20px;
`;
const InfoTitle = styled.Text`
  font-family: 'Avenir-Medium';
  font-size: 17px;
  line-height: 23px;
  margin-bottom: 5px;
  color: ${Colors.darkblue};
`;
const InfoText = styled.Text`
  font-family: 'Avenir-Book';
  font-size: 13px;
  line-height: 17px;
  color: ${Colors.darkblue};
`;
const Section = styled.View`
  margin-top: 30px;
  padding-bottom: ${props => (props.bottom ? '50px' : '0px')};
`;
const SectionTitle = styled.Text`
  font-family: 'Avenir-Medium';
  font-size: 19px;
  color: ${Colors.darkblue};
  margin-bottom: 32px;
  padding-left: 30px;
`;
const Slider = styled.ScrollView`
  width: ${Dimensions.get('screen').width}px;
  height: 200px;
  padding-left: 30px;
`;
const Card = styled.ImageBackground`
  width: 255px;
  height: 160px;
  padding: 25px 20px 20px 25px;
  background: ${Colors.white};
  border-radius: 20px;
  margin-right: 30px;
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
  margin: 8px 0px 19px;
`;
const CardBtn = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 20px;
  background: ${Colors.black};
  justify-content: center;
  align-items: center;
`;
const Category = styled.TouchableOpacity`
  background: ${Colors.white};
  padding: 25px 15px 15px;
  border-radius: 20px;
  width: 142px;
  height: 142px;
  margin-right: 30px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);
`;
const CategoryName = styled.Text`
  color: ${Colors.darkblue};
  font-family: 'Avenir-Medium';
  font-size: 17px;
  line-height: 23px;
  margin-top: 20px;
  margin-bottom: 11px;
`;
const Count = styled.Text`
  color: ${Colors.darkblue};
  font-family: 'Avenir-Book';
  font-size: 17px;
  line-height: 27px;
`;

export default Home;
