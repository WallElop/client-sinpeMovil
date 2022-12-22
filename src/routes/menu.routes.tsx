import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../screens/Dashboard/Dashboard";
import ContactsList from "../screens/ContactsList/ContactsList";
import IUser from "../model/User";
import MovementDetail from "../screens/MovementDetail/MovementDetail";
import IMovement from "../model/Movement";
import Transference from "../screens/Transference/Transference";

export type MenuStackParamList = {
  Dashboard: { user: IUser };
  MovementDetail: {
    movement: IMovement;
  };
  ContactsList: { number: string };
  Transference: { number: string; receiverNumber: string; name: string };
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
      <Screen name="ContactsList" component={ContactsList} />
      <Screen name="Transference" component={Transference} />
    </Navigator>
  );
}
