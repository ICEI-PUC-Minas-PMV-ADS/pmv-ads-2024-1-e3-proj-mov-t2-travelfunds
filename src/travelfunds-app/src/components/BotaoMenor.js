import React from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet } from "react-native";

const BotaoMenor = ( {text} ) => (
    
    <Button style={styles.button}  
        mode="contained" 
        onPress={() => console.log('Pressed')}>
       
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