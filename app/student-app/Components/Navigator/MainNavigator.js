import * as React from "react";
import SigninScreen from "../Screen/SigninScreen";
import MainScreen from "../Screen/MainScreen";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import userimage from "../../assets/user_icon.png";
import CertficationScreen from "../Screen/CerificationScreen";
import CompleteScreen from "../Screen/CompleteScreen";
import EmailScreen from "../Screen/EmailScreen";
import PasswordScreen from "../Screen/PasswordScreen";
import CreateScreen from "../Screen/CreateScreen";
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
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function First() {
  return (
    <Stack.Navigator
      initialRouteName="CertificationScreen"
      screenOptions={{
        headerStyle: {
          height: 75,
          backgroundColor: "blue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons
              name="ios-menu"
              size={24}
              color="white"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        ),
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
          height: 75,
          backgroundColor: "blue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons
              name="ios-menu"
              size={24}
              color="white"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        ),
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
          height: 75,
          backgroundColor: "blue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons
              name="ios-menu"
              size={24}
              color="white"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        ),
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
          height: 75,
          backgroundColor: "blue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white",
        },
        headerLeft: {},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons
              name="ios-menu"
              size={24}
              color="white"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="CertficationScreen" component={CertficationScreen} />
      <Stack.Screen name="CompleteScreen" component={CompleteScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
    </Stack.Navigator>
  );
}
function CustomDrawerContent({ navigation }) {
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
      <ScrollView>
        <DrawerItem
          icon={({ color, size }) => (
            <Entypo name="home" size={24} color="gray" />
          )}
          label="생성"
          onPress={() => {
            navigation.navigate("CertficationScreen");
          }}
        />
        <DrawerItem
          label="완료"
          onPress={() => {
            navigation.navigate("CompleteScreen");
          }}
        />
        <DrawerItem
          label="Close"
          onPress={() => {
            navigation.closeDrawer();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function MyDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={First}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      // edgeWidth={0}
    >
      <Drawer.Screen
        options={{ drawerLabel: () => null }}
        name="로그인"
        component={First}
      />
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
