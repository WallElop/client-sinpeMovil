import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login/Login";

export type AuthStackParamList = {
  Login: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
