import React from 'react';
import styled from 'styled-components/native';
import {Header, Card} from '../components';
import {Colors} from '../constants/colors';

const Preview = ({route, navigation}) => {
  return (
    <Container>
      <Header back backonly backPress={() => navigation.goBack()} />
      <Card
        title="Sleep Better"
        text="35 min"
        play={true}
        image={require('../../assets/images/human-2.png')}
        style={{marginTop: 80}}
        onPress={() => navigation.navigate('Play')}
      />

      <Section>
        <SectionTitle>Sessions</SectionTitle>
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
const Section = styled.View`
  margin-top: 50px;
`;
const SectionTitle = styled.Text`
  font-family: 'Avenir-Medium';
  font-size: 19px;
  color: ${Colors.darkblue};
  margin-bottom: 32px;
  padding-left: 30px;
`;

export default Preview;
