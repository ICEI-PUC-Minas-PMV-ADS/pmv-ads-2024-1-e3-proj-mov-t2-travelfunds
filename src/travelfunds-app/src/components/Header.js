import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from "react-native";

const Header = ( {title, goBack, children} ) => {
    return (
      <Appbar.Header style={styles.Text}>
      {
        goBack && 
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content title={title} />
      {children}
    </Appbar.Header>
    )
};


const styles = StyleSheet.create({
  Text: {
      backgroundColor: '#012B53',
      color: "#FFF",
      marginBottom: 12,
  },

  });
    
  export default Header;
