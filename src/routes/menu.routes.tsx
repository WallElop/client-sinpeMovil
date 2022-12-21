import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/Dashboard/Dashboard";
import IUser from "../model/User";
import MovementDetail from "../screens/MovementDetail/MovementDetail";
import IMovement from "../model/Movement";

export type MenuStackParamList = {
  Dashboard: { user: IUser };
  MovementDetail: {
    movement: IMovement
  };
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
      <Screen name="MovementDetail" component={MovementDetail} />
    </Navigator>
  );
}
