import React from "react";
import Home from "./components/layout/home";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={<Home />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
