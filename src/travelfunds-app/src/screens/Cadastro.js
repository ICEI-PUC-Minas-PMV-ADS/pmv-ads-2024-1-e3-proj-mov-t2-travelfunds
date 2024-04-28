import { View, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import InputSenha from "../components/InputSenha";
import InputButton from "../components/InputButton";
import { register } from "../services/urls";

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handleNome = (nome) => {
    setNome(nome);
  };

  const handleSenha = (senha) => {
    setSenha(senha);
  };

  const handleCadastro = () => {
    if (!email || !senha || !nome) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    register({ name: nome, email: email.toLowerCase(), password: senha }).then((response) => {
      if (response) {
        Alert.alert("Atenção", "Usuário cadastrado com sucesso!", [
          { text: "OK", onPress: () => navigation.navigate("Login") },
        ]);
        navigation.navigate("Login");
      } else {
        Alert.alert(
          "Atenção",
          "Usuário não cadastrado! Tente novamente mais tarde!"
        );
      }
    });
  };

  return (
    <View style={style.container}>
      <Input label="Email" value={email} onChangeText={handleEmail} />
      <Input label="Nome" value={nome} onChangeText={handleNome} />
      <InputSenha value={senha} onChangeText={handleSenha} />
      <InputButton text="Cadastrar" mode="contained" onPress={handleCadastro} />
      <InputButton
        text="Login"
        mode="text"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
  },
});

export default Cadastro;
