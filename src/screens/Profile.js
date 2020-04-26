import React from 'react';
import styled from 'styled-components/native';
import {Header} from '../components';
import {
  SettingIcon,
  AvatarIcon,
  AchieveIcon,
  LightIcon,
  PlayIcon,
} from '../../assets/icons';
import {Colors} from '../constants/colors';

const Profile = ({navigation}) => {
  return (
    <Container>
      <Header
        title={'Profile'}
        icon={<SettingIcon width={28} height={28} />}
        onPress={() => navigation.navigate('Settings')}
      />
      <Avatar>
        <AvatarIcon width={70} height={70} />
        <User>
          <Username>John Smith</Username>
          <Useremail>johnsmith@gmail.com</Useremail>
        </User>
      </Avatar>

      <InfoCard>
        <TextWrapper>
          <InfoTitle>Target Achieved</InfoTitle>
          <InfoText>
            Learn more about everything that you have achieved below.
          </InfoText>
        </TextWrapper>
        <Icon>
          <AchieveIcon width={28} height={28} />
        </Icon>
      </InfoCard>

      <Section>
        <SectionTitle>Progress</SectionTitle>
        <Cards>
          <Card>
            <LightIcon width={24} height={24} />
            <CardTitle>120 h</CardTitle>
            <CardText>Total meditation</CardText>
          </Card>

          <Card>
            <PlayIcon width={24} height={24} />
            <CardTitle>53 min</CardTitle>
            <CardText>Longest session</CardText>
          </Card>
        </Cards>
      </Section>

      <Section bottom>
        <SectionTitle>Achievements</SectionTitle>
      </Section>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  padding: 30px;
  padding-top: 100px;
  background: ${Colors.lightgray};
`;
const Avatar = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;
const User = styled.View`
  margin-left: 28px;
`;
const Username = styled.Text`
  font-family: 'Avenir-Heavy';
  font-size: 19px;
  color: ${Colors.darkblue};
  line-height: 25px;
  margin-bottom: 3px;
`;
const Useremail = styled.Text`
  font-family: 'Avenir-Book';
  font-size: 13px;
  color: ${Colors.darkblue};
  line-height: 17px;
`;
const InfoCard = styled.View`
  flex-direction: row;
  align-items: center;
  width: 85%;
  height: 110px;
  background: ${Colors.white};
  padding: 20px 20px;
  align-self: center;
  margin-top: 30px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.02);
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
  margin: 40px 0px;
  padding-bottom: ${props => (props.bottom ? '50px' : '0px')};
`;
const SectionTitle = styled.Text`
  font-family: 'Avenir-Medium';
  font-size: 19px;
  color: ${Colors.darkblue};
  margin-bottom: 32px;
`;
const Cards = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Card = styled.View`
  width: 142px;
  height: 142px;
  border-radius: 20px;
  background: ${Colors.white};
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.03);
`;
const CardTitle = styled.Text`
  font-family: 'Avenir-Medium';
  font-size: 17px;
  line-height: 23px;
  color: ${Colors.darkblue};
  margin: 20px 0px 10px;
`;
const CardText = styled.Text`
  font-family: 'Avenir-Book';
  font-size: 13px;
  line-height: 17px;
  color: ${Colors.darkblue};
`;

export default Profile;
