import { NavigationContainer } from "@react-navigation/native";
import UserProvider from "./src/contexts/UserContext";
import Route from "./src/navigation/Route";

const TravelFundsTheme = {
  colors: {
    background: "#012B53",
  },
};

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer theme={TravelFundsTheme}>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
}
