import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {} from 'react-native';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeStack} options={{title: 'Home'}} />
      <Tab.Screen
        name="contactTab"
        component={ContactStack}
        options={{title: 'Contact'}}
      />
    </Tab.Navigator>
  );
}
