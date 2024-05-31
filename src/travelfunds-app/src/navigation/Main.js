import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditarViagem from '../screens/EditarViagem';
import Perfil from '../screens/Perfil';
import EditarPerfil from '../screens/EditarPerfil';
import CadastroViagem from '../screens/CadastroViagem';
import Meta from '../screens/Meta';
import EditarMeta from '../screens/EditarMeta';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="EditarViagem" component={EditarViagem} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
      <Stack.Screen name="CadastroViagem" component={CadastroViagem} />
      <Stack.Screen name="Meta" component={Meta} />
      <Stack.Screen name="EditarMeta" component={EditarMeta} />
    </Stack.Navigator>
  );
};

export default Main;
