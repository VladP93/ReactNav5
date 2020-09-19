import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Home(props) {
  const {navigation} = props;

  return (
    <View>
      <Text>This is HomeComponent</Text>
      <Button title="Ir a about" onPress={() => navigation.navigate('about')} />
      <Button
        title="Ir a contact"
        onPress={() => navigation.navigate('contactTab')}
      />
      <Button
        title="Ir a courses"
        onPress={() => navigation.navigate('contactTab', {screen: 'courses'})}
      />
    </View>
  );
}
