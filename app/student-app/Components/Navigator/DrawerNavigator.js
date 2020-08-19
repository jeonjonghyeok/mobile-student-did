import * as React from "react";
import SigninScreen from "../Screen/SigninScreen";
import MainScreen from "../Screen/MainScreen";
import CertficationScreen from "../Screen/CerificationScreen";
import CompleteScreen from "../Screen/CompleteScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

function MyDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="CertficationScreen" component={CertficationScreen} />
      <Drawer.Screen name="CompleteScreen" component={CompleteScreen} />
      <Drawer.Screen name="MainScreen" component={MainScreen} />
      <Drawer.Screen name="SigninScreen" component={SigninScreen} />
    </Drawer.Navigator>
  );
}

export default class DrawerNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyDrawerNavigator />
      </NavigationContainer>
    );
  }
}
