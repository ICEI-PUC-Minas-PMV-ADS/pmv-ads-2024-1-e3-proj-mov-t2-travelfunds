import { StyleSheet, View, Alert } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import InputSenha from "../components/InputSenha";
import InputButton from "../components/InputButton";
import { login } from "../services/urls";
import { useUser } from "../contexts/UserContext";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { setSigned, setName } = useUser();

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

    login({ email: email.toLowerCase(), password: senha }).then((response) => {
      console.log(response);

      if (response && response.user) {
        setSigned(true);
        setName(response.user.name);
      } else {
        Alert.alert("Erro", "Usuário ou senha invalidos!");
      }
    });
  };

  return (
    <View style={styles.container}>
      <Input label="Email" value={email} onChangeText={handleEmail} />
      <InputSenha value={senha} onChangeText={handleSenha} />
      <InputButton text="Log In" mode="contained" onPress={handleLogin} />
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
    justifyContent: "center",
    padding: 12,
  },
});

export default Login;
