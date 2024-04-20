import { View, Image, StyleSheet } from "react-native";
import React from "react";
import InputButton from "../components/InputButton";

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View>
        <View style={style.logo}>
          <Image source={require('../../assets/travelfunds-modified 2.png')} />
        </View>
        <InputButton
          text="Log In"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <InputButton
        text="Cadastre-se"
        mode="text"
        onPress={() => navigation.navigate("Cadastro")}
      />

       <InputButton
        text="Gerenciar Perfil"
        mode="text"
        onPress={() => navigation.navigate("EditarPerfil")}
      />
      <InputButton
        text="Viagem Main"
        mode="text"
        onPress={() => navigation.navigate("ViagemMain")}
      />
    </View>
    
    
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
    marginTop: 150,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 25,
  },
});

export default Home;
