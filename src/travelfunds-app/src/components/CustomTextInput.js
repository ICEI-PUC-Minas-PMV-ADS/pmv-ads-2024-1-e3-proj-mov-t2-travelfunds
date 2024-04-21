import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const CustomTextInput = ({ label, value, onChangeText, style }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused, style]}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <View
        style={[
          styles.labelline,
          isFocused || value ? styles.labellineFocused : null,
        ]}
      >
        <Text
          style={[styles.labelText, isFocused ? styles.labelTextFocused : null]}
        >
          {label}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 80,
  },
  input: {
    position: 'absolute',
    width: '100%',
    fontSize: 22,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f0ffff',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  labelline: {
    backgroundColor: '#012B53',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 10,
    left: 5,
    zIndex: 2,
    justifyContent: 'center',
    transform: [{ scale: 0.88 }],
  },
  labellineFocused: {
    top: -20,
    transform: [{ scale: 0.9 }],
  },
  labelText: {
    color: '#42627F',
    fontSize: 24,
  },
  labelTextFocused: {
    color: '#f0ffff',
  },
});

export default CustomTextInput;
