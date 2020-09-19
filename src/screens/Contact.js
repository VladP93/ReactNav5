import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Contact(props) {
  const {navigation} = props;

  return (
    <View>
      <Text>This is ContactComponent</Text>
      <Button title="About" onPress={() => navigation.navigate('about')} />
    </View>
  );
}

const styles = StyleSheet.create({});
