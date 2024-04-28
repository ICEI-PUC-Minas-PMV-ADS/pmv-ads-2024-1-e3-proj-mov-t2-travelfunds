import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import ViagemMain from './src/screens/ViagemMain';
import Cadastro from './src/screens/Cadastro';
import EditarPerfil from './src/screens/EditarPerfil';
import EditarViagem from './src/screens/EditarViagem';
import Perfil from './src/screens/Perfil';

const Stack = createNativeStackNavigator();

const TravelFundsTheme = {
  colors: {
    background: '#012B53',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={TravelFundsTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ViagemMain" component={ViagemMain} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Perfil' component={Perfil} /> 
        <Stack.Screen name='EditarPerfil' component={EditarPerfil} /> 
        <Stack.Screen name='EditarViagem' component={EditarViagem} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
