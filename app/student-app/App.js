//Student

import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./Components/Navigator/DrawerNavigator";
import { StatusBar } from "expo-status-bar";
import SigninScreen from "./Components/Screen/SigninScreen";
import MainScreen from "./Components/Screen/MainScreen";
import CertficationScreen from "./Components/Screen/CerificationScreen";
import CompleteScreen from "./Components/Screen/CompleteScreen";

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function MainNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="SigninScreen">
//       <Stack.Screen name="CertficationScreen" component={CertficationScreen} />
//       <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
//       <Stack.Screen name="MainScreen" component={MainScreen} />
//       <Stack.Screen name="SigninScreen" component={SigninScreen} />
//     </Stack.Navigator>
//   );
// }

export default class App extends React.Component {
  render() {
    return <DrawerNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
