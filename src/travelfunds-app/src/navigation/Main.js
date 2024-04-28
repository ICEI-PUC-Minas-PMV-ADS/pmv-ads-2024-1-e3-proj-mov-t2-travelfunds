import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViagemMain from "../screens/ViagemMain";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="ViagemMain" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ViagemMain" component={ViagemMain} />
    </Stack.Navigator>
  );
};

export default Main;
