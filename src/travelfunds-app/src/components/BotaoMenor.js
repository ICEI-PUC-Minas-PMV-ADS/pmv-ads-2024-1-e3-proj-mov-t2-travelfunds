import React from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet } from "react-native";

const BotaoMenor = ( {text, onPress} ) => (
    
    <Button 
        style={styles.button}  
        mode="contained" 
        onPress={onPress}
        >     
    {text}  
    </Button>
     
  );
  export default BotaoMenor;

  const styles = StyleSheet.create({
    button: {
        backgroundColor: "#8196AA",
        marginTop: 12,
        

    }
    
    },
  );