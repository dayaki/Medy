import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {HomeTabIcon, SearchTabIcon, ProfileTabIcon} from '../../assets/icons';

// Screens
import Home from '../screens/Home';
import Category from '../screens/Category';
import Preview from '../screens/Preview';
import Player from '../screens/Player';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const tabs = {
  Home: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: <HomeTabIcon width={28} height={28} />,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Explore: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: <SearchTabIcon width={28} height={28} />,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Profile: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: <ProfileTabIcon width={28} height={28} />,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Preview" component={Preview} />
      <Stack.Screen name="Play" component={Player} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Tab.Navigator
      tabBar={props => (
        <AnimatedTabBar
          tabs={tabs}
          {...props}
          itemOuterSpace={{horizontal: 22}}
        />
      )}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
