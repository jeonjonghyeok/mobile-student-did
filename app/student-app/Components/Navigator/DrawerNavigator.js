import * as React from "react";
import SigninScreen from "../Screen/SigninScreen";
import MainScreen from "../Screen/MainScreen";
import CertficationScreen from "../Screen/CerificationScreen";
import CompleteScreen from "../Screen/CompleteScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="CertficationScreen"
          component={CertficationScreen}
        />
        <Drawer.Screen name="CompleteScreen" component={CompleteScreen} />
        <Drawer.Screen name="MainScreen" component={MainScreen} />
        <Drawer.Screen name="SigninScreen" component={SigninScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
