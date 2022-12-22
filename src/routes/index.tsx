import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";

import { AuthRoutes, AuthStackParamList } from "./auth.routes";
import { MenuRoutes, MenuStackParamList } from "./menu.routes";

export type RootStackParamList = {
  AuthRoutes: NavigatorScreenParams<AuthStackParamList>;
  MenuRoutes: NavigatorScreenParams<MenuStackParamList>;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Navigator
      initialRouteName="AuthRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="AuthRoutes" component={AuthRoutes} />
      <Screen name="MenuRoutes" component={MenuRoutes} />
    </Navigator>
  );
}
