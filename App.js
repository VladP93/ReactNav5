import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import TabNavigation from './src/navigation/TabNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* <TabNavigation /> */}
      <DrawerNavigation />
    </NavigationContainer>
  );
}
