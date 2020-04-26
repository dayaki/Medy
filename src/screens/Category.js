import React from 'react';
import styled from 'styled-components/native';
import {Header, Card} from '../components';
import {FilterIcon} from '../../assets/icons';
import {Colors} from '../constants/colors';

const Category = ({route, navigation}) => {
  const {type} = route.params;
  return (
    <Container>
      <Header
        back
        backPress={() => navigation.goBack()}
        icon={<FilterIcon width={28} height={28} />}
      />
      <Title>{type}</Title>
      <Cards>
        <Card
          title="Meditation Break"
          text="10 min"
          image={require('../../assets/images/human-4.png')}
        />
        <Card
          title="Deep Breathing"
          text="25 min"
          image={require('../../assets/images/human-5.png')}
        />
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
const Title = styled.Text`
  font-family: 'Avenir-Heavy';
  font-size: 25px;
  line-height: 33px;
  color: ${Colors.darkblue};
  margin: 25px 0px;
`;
const Cards = styled.View``;

export default Category;
