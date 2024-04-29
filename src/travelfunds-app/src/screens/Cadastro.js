import { View, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import InputSenha from "../components/InputSenha";
import InputButton from "../components/InputButton";
import { cadastro } from "../services/Firebase.Auth";

const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handleSenha = (senha) => {
    setSenha(senha);
  };

  const handleCadastro = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }
    
    cadastro(email, senha)
  };

  return (
    <View style={style.container}>
      <Input label="Email" value={email} onChangeText={handleEmail} />
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
