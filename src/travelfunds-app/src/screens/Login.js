// import { StyleSheet, View } from 'react-native';
// import React from 'react';
// import Input from '../components/Input';
// import InputSenha from '../components/InputSenha';
// import InputButton from '../components/InputButton';

// const Login = ({}) => {
//   return (
//     <View style={styles.container}>
//       <Input label="Email" />
//       <InputSenha />
//       <InputButton text="Log In" mode="contained" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 12,
//   },
// });

// export default Login;

// Login.js

import { StyleSheet, View, Button } from 'react-native';
import React from 'react';
import Input from '../components/Input';
import InputSenha from '../components/InputSenha';
import InputButton from '../components/InputButton';
import { useNavigation } from '@react-navigation/native'; // Add this import

const Login = ({}) => {
  const navigation = useNavigation(); // Add this line

  return (
    <View style={styles.container}>
      <Input label="Email" />
      <InputSenha />
      <InputButton
        text="Log In"
        mode="contained"
        onPress={() => navigation.navigate('NovaPagina')} // Update this line
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 12,
  },
});

export default Login;
