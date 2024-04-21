import { StyleSheet, View, Button } from 'react-native';
import React from 'react';
import Input from '../components/Input';
import InputSenha from '../components/InputSenha';
import InputButton from '../components/InputButton';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Input label="Email" />
      <InputSenha />
      <InputButton text="Log In" mode="contained" />
      <InputButton
        text="Cadastre-se"
        mode="text"
        onPress={() => navigation.navigate("Cadastro")}
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
