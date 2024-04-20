import React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet } from "react-native";

const TextTop = ( {text} ) => {
    return (
        <Text style={styles.Text} 
        variant="headlineLarge">
        {text} </Text>
    )
};

    
  export default TextTop;

  const styles = StyleSheet.create({
    Text: {
        color: "#FFF",
        marginBottom: 12,
    }

    }
    
    
  );