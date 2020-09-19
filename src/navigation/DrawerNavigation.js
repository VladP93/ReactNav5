import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {} from 'react-native';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';

const Drawer = createDrawerNavigator();

export default function TabNavigation() {
  return (
    <Drawer.Navigator initialRouteName="home">
      <Drawer.Screen
        name="home"
        component={HomeStack}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="contactTab"
        component={ContactStack}
        options={{title: 'Contact'}}
      />
    </Drawer.Navigator>
  );
}
