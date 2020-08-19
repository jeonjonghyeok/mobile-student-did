//Student

import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StatusBar } from "expo-status-bar";
import SigninScreen from "./Components/Screen/SigninScreen";
import MainScreen from "./Components/Screen/MainScreen";
import CertficationScreen from "./Components/Screen/CerificationScreen";
import CompleteScreen from "./Components/Screen/CompleteScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="SigninScreen">
      <Stack.Screen name="CertficationScreen" component={CertficationScreen} />
      <Stack.Screen name="CertficationScreen" component={CertficationScreen} />
      <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
    </Stack.Navigator>
  );
}

// export function DrawerNavigator() {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="CertficationScreen" component={CertficationScreen} />
//       <Drawer.Screen name="CompleteScreen" component={CompleteScreen} />
//       <Drawer.Screen name="MainScreen" component={MainScreen} />
//       <Drawer.Screen name="SigninScreen" component={SigninScreen} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SigninScreen">
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
