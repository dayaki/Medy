import React, {useRef, useState} from 'react';
import styled from 'styled-components/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Colors} from '../constants/colors';
import {ForwardIcon, BackwardIcon} from '../../assets/icons';
// import {wp, hp} from '../constants/utils';

const Intro = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const slider = useRef();

  const slides = [
    {
      key: '1',
      title: 'Reduce Stress',
      icon: require('../../assets/images/intro-1.png'),
      text: 'We are here to help you get rid of the stress you might have.',
    },
    {
      key: '2',
      title: 'Constant Support',
      icon: require('../../assets/images/intro-2.png'),
      text: 'We are always here to support \nyou no matter what.',
    },
    {
      key: '3',
      title: 'Stay Energized',
      icon: require('../../assets/images/intro-3.png'),
      text: 'Our app will help you to stay \n energized all the time.',
    },
  ];

  const changeSlide = index => {
    console.log('INDEX', index + 1);
    setSliderIndex(index + 1);
    if (index === 2) {
      console.log('=====', index);
    } else {
      slider.current.goToSlide(index + 1);
    }
  };

  const handleSkip = () => {};

  const renderPagination = activeIndex => {
    return (
      <Pagination>
        {slides.length > 1 &&
          slides.map((_, i) => (
            <Dot key={i} active={i === activeIndex ? true : false} />
          ))}
      </Pagination>
    );
  };

  const renderItem = ({item}) => {
    return (
      <Slider>
        <ImageWrapper>
          <Image source={item.icon} resizeMode="cover" />
        </ImageWrapper>
        <TextWrapper>
          <Title>{item.title}</Title>
          <Text>{item.text}</Text>
        </TextWrapper>
      </Slider>
    );
  };

  return (
    <Container>
      <SkipBtn activeOpacity={0.8} onPress={handleSkip}>
        <SkipBtnText>Skip</SkipBtnText>
      </SkipBtn>
      <AppIntroSlider
        ref={slider}
        data={slides}
        renderItem={renderItem}
        renderPagination={renderPagination}
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 50px 0px;
`;
const SkipBtn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
  padding-right: 30px;
`;
const SkipBtnText = styled.Text`
  font-size: 18px;
`;
const Slider = styled.View`
  width: 100%;
  height: 100%;
  padding: 50px 0px;
  align-items: center;
`;
const ImageWrapper = styled.View`
  width: 375px;
  height: 315px;
  margin-top: 70px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const TextWrapper = styled.View`
  margin-top: 50px;
  align-items: center;
  width: 80%;
`;
const Title = styled.Text`
  font-size: 26px;
  line-height: 33px;
  margin: 20px 0px;
  color: ${Colors.darkblue};
`;
const Text = styled.Text`
  font-size: 17px;
  text-align: center;
  line-height: 22px;
  color: ${Colors.darkblue};
`;
const Pagination = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const Dot = styled.View`
  width: 31px;
  height: 6px;
  border-radius: 58px;
  margin: 0px 4px;
  background-color: ${props => (props.active ? Colors.darkblue : '#c8c8c8')};
`;

export default Intro;
