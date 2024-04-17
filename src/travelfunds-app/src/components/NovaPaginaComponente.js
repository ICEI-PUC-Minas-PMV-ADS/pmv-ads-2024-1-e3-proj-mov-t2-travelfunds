import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const InputButton = ({ text, mode, onPress }) => {
  const buttonColor = mode == 'text' ? null : '#8196AA';

  return (
    <Button
      buttonColor={buttonColor}
      textColor="#FFF"
      mode={mode}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({});

export default InputButton;
