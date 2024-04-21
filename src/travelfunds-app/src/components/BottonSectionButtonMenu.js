import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BottonButtonsMenu = ({ text, mode, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BottonButtonsMenu;
