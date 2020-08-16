import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { CertficationScreen } from "../Screen/CerificationScreen";
import { CompleteScreen } from "../Screen/CompleteScreen";
import { MainScreen } from "../Screen/MainScreen";
import { SigninScreen } from "../Screen/SigninScreen";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SigninScreen">
        <Stack.Screen
          name="CertficationScreen"
          component={CertficationScreen}
        />
        <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
