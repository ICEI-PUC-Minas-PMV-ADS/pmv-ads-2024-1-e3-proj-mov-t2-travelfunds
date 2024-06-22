import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const BotaoMenor = ( { text, onPress, additionalStyles } ) => (
  <Button
    style={[styles.button, additionalStyles]}
    mode="contained"
    onPress={onPress}
  >
    {text}
  </Button>
);

export default BotaoMenor;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EF4444',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    
  },
});
    