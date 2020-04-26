import React from 'react';
import styled from 'styled-components/native';
import {Header} from '../components';
import {
  CloseIcon,
  ProfileTabIcon,
  ForwardIcon,
  PreferenceIcon,
  NotificationIcon,
  DocumentIcon,
  ContactIcon,
  LogoutIcon,
} from '../../assets/icons';
import {Colors} from '../constants/colors';

const Settings = ({navigation}) => {
  const navItems = [
    {
      name: 'Personal Details',
      icon: <ProfileTabIcon width={24} height={24} fill="#fff" />,
    },
    {
      name: 'Perferences',
      icon: <PreferenceIcon width={24} height={24} fill="#fff" />,
    },
    {
      name: 'Notifications',
      icon: <NotificationIcon width={24} height={24} fill="#fff" />,
    },
    {
      name: 'Privacy Policy',
      icon: <DocumentIcon width={24} height={24} fill="#fff" />,
    },
    {
      name: 'Contact Us',
      icon: <ContactIcon width={24} height={24} fill="#fff" />,
    },
  ];
  return (
    <Container>
      <Header
        title={'Settings'}
        icon={<CloseIcon width={28} height={28} />}
        onPress={() => navigation.goBack()}
      />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index}>
            <Icon>{item.icon}</Icon>
            <ListName>{item.name}</ListName>
            <Button>
              <ForwardIcon width={24} height={24} fill="#000" />
            </Button>
          </ListItem>
        ))}
        <ListItem>
          <Icon>
            <LogoutIcon width={24} height={24} fill="#fff" />
          </Icon>
          <ListName>Logout</ListName>
        </ListItem>
      </List>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  padding: 30px;
  padding-top: 100px;
  background: ${Colors.lightgray};
`;
const List = styled.View`
  width: 100%;
  margin-top: 20px;
`;
const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: ${Colors.black};
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;
const ListName = styled.Text`
  font-family: 'Avenir-Heavy';
  font-size: 17px;
  line-height: 23px;
  color: ${Colors.darkblue};
  margin-left: 20px;
`;
const Button = styled.TouchableOpacity`
  position: absolute;
  right: 2px;
`;

export default Settings;
