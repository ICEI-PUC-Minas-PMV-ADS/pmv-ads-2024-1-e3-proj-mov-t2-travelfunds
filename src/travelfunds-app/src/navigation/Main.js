import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditarViagem from '../screens/EditarViagem';
import Perfil from '../screens/Perfil';
import EditarPerfil from '../screens/EditarPerfil';
import CadastroViagem from '../screens/CadastroViagem';
import Meta from '../screens/Meta/Meta';
import EditarMeta from '../screens/Meta/EditarMeta';
import Contribuicao from '../screens/Contribuicao/Contribuicao';
import CadastroContribuicao from '../screens/Contribuicao/CadastroContribuicao';
import Gasto from '../screens/Gasto/Gasto';
import CadastroGasto from '../screens/Gasto/CadastroGasto';
import Relatorio from '../screens/Relatorio';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="EditarViagem" component={EditarViagem} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Relatorio" component={Relatorio} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
      <Stack.Screen name="CadastroViagem" component={CadastroViagem} />
      <Stack.Screen name="Meta" component={Meta} />
      <Stack.Screen name="EditarMeta" component={EditarMeta} />
      <Stack.Screen name="Contribuicao" component={Contribuicao} />
      <Stack.Screen
        name="CadastroContribuicao"
        component={CadastroContribuicao}
      />
      <Stack.Screen name="Gasto" component={Gasto} />
      <Stack.Screen name="CadastroGasto" component={CadastroGasto} />
    </Stack.Navigator>
  );
};

export default Main;
