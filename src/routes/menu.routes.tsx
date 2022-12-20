import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/Dashboard/Dashboard";
import IUser from "../model/User";

export type MenuStackParamList = {
  Dashboard: { user: IUser };
};

const { Navigator, Screen } = createNativeStackNavigator<MenuStackParamList>();

export function MenuRoutes() {
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
}
