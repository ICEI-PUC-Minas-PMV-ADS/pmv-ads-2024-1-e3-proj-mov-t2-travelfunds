import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Route from './src/navigation/Route';

const TravelFundsTheme = {
  colors: {
    background: '#012B53',
  },
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer theme={TravelFundsTheme}>
        <Route />
      </NavigationContainer>
    </>
  );
}
