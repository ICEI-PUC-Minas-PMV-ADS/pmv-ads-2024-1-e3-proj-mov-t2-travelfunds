import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import InputButton from "../components/InputButton";

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Image source={require("../../assets/travelfunds-modified 2.png")} />
      </View>
      <View style={style.buttons}>
        <InputButton
          text="Log In"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        />
        <InputButton text="Cadastre-se" mode="text" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  logo: {
    alignItems: "center",
    margin: 12,
  },
  buttons: {
    margin: 16,
  },
});

export default Home;
