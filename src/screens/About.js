import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function About(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>This is AboutComponent</Text>
      <Button
        title="Ir a contact"
        onPress={() => navigation.navigate('contact')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
