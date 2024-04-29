import { StyleSheet, View, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import InputSenha from "../components/InputSenha";
import InputButton from "../components/InputButton";
import { login } from "../services/Firebase.Auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handleSenha = (senha) => {
    setSenha(senha);
  };

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    login(email, senha);
  };

  return (
    <View style={styles.container}>
      <Input label="Email" value={email} onChangeText={handleEmail} />
      <InputSenha value={senha} onChangeText={handleSenha} />
      <InputButton text="Log In" mode="contained" onPress={handleLogin} />
      <InputButton
        text="Cadastre-se"
        mode="text"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
  },
});

export default Login;
