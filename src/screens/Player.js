import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Header} from '../components';
import {Colors} from '../constants/colors';
import {PlayIcon, PauseIcon} from '../../assets/icons';

const Player = ({route, navigation}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const changePlayState = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <Container>
      <Header
        back
        backonly
        backPress={() => navigation.goBack()}
        style={{position: 'absolute', top: 100, left: 30}}
      />
      <Section>
        <SectionTitle>Sleep Better</SectionTitle>
        <PlayerBtn
          source={require('../../assets/images/stroke.png')}
          resizeMode="cover">
          <Button activeOpacity={0.8} onPress={changePlayState}>
            {isPlaying ? (
              <PauseIcon width={40} height={40} fill="#fff" />
            ) : (
              <PlayIcon width={40} height={40} fill="#fff" />
            )}
          </Button>
        </PlayerBtn>
        <Duration>02:25</Duration>
      </Section>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: ${Colors.lightgray};
  justify-content: center;
  align-items: center;
`;
const Section = styled.View`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;
const SectionTitle = styled.Text`
  font-family: 'Avenir-Heavy';
  font-size: 22px;
  line-height: 29px;
  color: ${Colors.darkblue};
  margin-bottom: 52px;
  text-align: center;
`;
const PlayerBtn = styled.ImageBackground`
  width: 145px;
  height: 145px;
  justify-content: center;
  align-items: center;
`;
const Button = styled.TouchableOpacity`
  width: 116px;
  height: 116px;
  border-radius: 140px;
  background: ${Colors.black};
  justify-content: center;
  align-items: center;
`;
const Duration = styled.Text`
  margin-top: 52px;
  font-family: 'Avenir-Medium';
  font-size: 17px;
  line-height: 23px;
  color: ${Colors.darkblue};
`;

export default Player;
