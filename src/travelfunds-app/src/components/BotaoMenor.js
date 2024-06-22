// import React from 'react';
// import { Button, Text } from 'react-native-paper';
// import { StyleSheet } from 'react-native';

// const BotaoMenor = ({ text, onPress, additionalStyles }) => (
//   <Button
//     style={[styles.button, additionalStyles]}
//     mode="contained"
//     onPress={onPress}
//   >
//     {text}
//   </Button>
// );

// export default BotaoMenor;

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#8196AA',
//     borderRadius: 20,
//     alignItems: 'center',
//   },
// });
// BotaoMenor.js

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
    backgroundColor: '#8196AA',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 40,
  },
});
