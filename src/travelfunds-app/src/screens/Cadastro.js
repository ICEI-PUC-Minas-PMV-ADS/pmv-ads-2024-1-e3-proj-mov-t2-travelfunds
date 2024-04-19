import { View, StyleSheet } from "react-native";
import React from "react";
import Input from "../components/Input";
import InputSenha from "../components/InputSenha";
import InputButton from "../components/InputButton";

const Cadastro = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Input label="Email" />
      <Input label="Nome" />
      <InputSenha />
      <InputButton text="Cadastrar" mode="contained" />
      <InputButton
        text="Login"
        mode="text"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const style = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        padding: 12
    }
});

export default Cadastro;
