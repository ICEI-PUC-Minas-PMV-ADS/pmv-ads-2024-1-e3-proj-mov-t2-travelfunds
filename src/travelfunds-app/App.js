import { NavigationContainer } from "@react-navigation/native";
import Route from "./src/navigation/Route";

const TravelFundsTheme = {
  colors: {
    background: "#012B53",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={TravelFundsTheme}>
      <Route />
    </NavigationContainer>
  );
}
