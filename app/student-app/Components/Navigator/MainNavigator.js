import * as React from "react";
import SigninScreen from "../Screen/SigninScreen";
import MainScreen from "../Screen/MainScreen";
import { StyleSheet, Text, View, Image } from "react-native";
import userimage from "../../assets/user_icon.png";
import CertficationScreen from "../Screen/CerificationScreen";
import CompleteScreen from "../Screen/CompleteScreen";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Signin() {
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
      <Stack.Screen name="CertficationScreen" component={CertficationScreen} />
      <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
    </Stack.Navigator>
  );
}
function Certfication() {
  return (
    <Stack.Navigator
      initialRouteName="CertficationScreen"
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
      <Stack.Screen name="CertficationScreen" component={CertficationScreen} />
      <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
    </Stack.Navigator>
  );
}
function Complete() {
  return (
    <Stack.Navigator
      initialRouteName="CompleteScreen"
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
      <Stack.Screen name="CertficationScreen" component={CertficationScreen} />
      <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
    </Stack.Navigator>
  );
}
function Main() {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
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
      <Stack.Screen name="CertficationScreen" component={CertficationScreen} />
      <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
    </Stack.Navigator>
  );
}
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 150, backgroundColor: "White" }}>
        <View
          style={{ height: 150, backgroundColor: "gray", flexDirection: "row" }}
        >
          <Image
            source={userimage}
            style={{ marginTop: 40, marginLeft: 20, height: 60, width: 60 }}
          />
          <Text style={{ marginTop: 50, marginLeft: 10, color: "white" }}>
            안녕하세요 사용자님
          </Text>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

function MyDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={Signin}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="로그인" component={Signin} />
      <Drawer.Screen name="인증화면" component={Certfication} />
      <Drawer.Screen name="발급완료" component={Complete} />
      <Drawer.Screen name="메인화면" component={Main} />
    </Drawer.Navigator>
  );
}

export default class MainNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyDrawerNavigator />
      </NavigationContainer>
    );
  }
}
