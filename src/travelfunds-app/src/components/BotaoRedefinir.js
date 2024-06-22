import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BotaoRedefinir = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#FFF', // Cor do link (pode ser personalizada)
    textDecorationLine: 'underline', // Adiciona sublinhado para indicar que é um link
  },
});

export default BotaoRedefinir;