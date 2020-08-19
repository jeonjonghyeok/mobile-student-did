import * as React from "react";
import SigninScreen from "../Screen/SigninScreen";
import MainScreen from "../Screen/MainScreen";
import CertficationScreen from "../Screen/CerificationScreen";
import CompleteScreen from "../Screen/CompleteScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="CertficationScreen" component={CertficationScreen} />
      <Drawer.Screen name="CompleteScreen" component={CompleteScreen} />
      <Drawer.Screen name="MainScreen" component={MainScreen} />
      <Drawer.Screen name="SigninScreen" component={SigninScreen} />
    </Drawer.Navigator>
  );
}
function MyStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SigninScreen"
      screenOptions={{
        headerStyle: {
          height: 55,
          backgroundColor: "blue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
      }}
    >
      <Stack.Screen name="Navigation" component={MyDrawerNavigator} />
      <Stack.Screen name="CertficationScreen" component={CertficationScreen} />
      <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}

export default class MainNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer
        screenProps={{
          openDraw: () =>
            this.props.navigation.dispatch(DrawerActions.openDrawer()),
        }}
      >
        <MyStackNavigator />
      </NavigationContainer>
    );
  }
}
