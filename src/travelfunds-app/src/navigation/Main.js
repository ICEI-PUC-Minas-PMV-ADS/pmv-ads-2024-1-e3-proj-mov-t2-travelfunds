import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViagemMain from "../screens/ViagemMain";
import EditarViagem from "../screens/EditarViagem";
import Perfil from "../screens/Perfil";
import EditarPerfil from "../screens/EditarPerfil";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="ViagemMain"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ViagemMain" component={ViagemMain} />
      <Stack.Screen name="EditarViagem" component={EditarViagem} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
    </Stack.Navigator>
  );
};

export default Main;
