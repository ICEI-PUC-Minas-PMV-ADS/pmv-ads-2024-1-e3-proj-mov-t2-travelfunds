import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoSalvar = ({ text, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: { backgroundColor: "#8196AA", marginTop: 12, padding: 10, borderRadius: 10, alignItems: 'center' },
    buttonText: { color: '#fff', fontSize: 16 }
});

export default BotaoSalvar;
