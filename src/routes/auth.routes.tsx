import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login/Login";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator
        initialRouteName="log"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Screen name="log" component={Login} />
    </Navigator>
  );
}
