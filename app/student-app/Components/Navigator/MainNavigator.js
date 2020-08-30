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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function First({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SigninScreen"
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
      }}
    >
      <Stack.Screen
        options={{ title: "회원가입" }}
        name="SigninScreen"
        component={SigninScreen}
      />
      <Stack.Screen
        options={{ title: "새로 만들기" }}
        name="CreateScreen"
        component={CreateScreen}
      />
      <Stack.Screen
        options={{ title: "이메일 인증" }}
        name="EmailScreen"
        component={EmailScreen}
      />
      <Stack.Screen
        options={{ title: "모바일 학생증 생성완료" }}
        name="CompleteScreen"
        component={CompleteScreen}
      />
      <Stack.Screen
        name="MainScreen"
        options={{
          title: "메인화면",
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
        component={MainScreen}
      />
      <Stack.Screen
        name="PasswordScreen"
        options={{
          title: "검증화면",
        }}
        component={PasswordScreen}
      />
      <Stack.Screen
        name="CertficationScreen"
        options={{
          title: "검증완료",
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
        component={CertficationScreen}
      />
    </Stack.Navigator>
  );
}
function MainStack({ navigation }) {
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
      <Stack.Screen
        name="MainScreen"
        options={{ title: "메인화면" }}
        component={MainScreen}
      />
      <Stack.Screen
        name="PasswordScreen"
        options={{ title: "검증화면" }}
        component={PasswordScreen}
      />
      <Stack.Screen
        name="CertficationScreen"
        options={{
          title: "검증완료",
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
        component={CertficationScreen}
      />
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
          label="메인화면"
          onPress={() => {
            navigation.navigate("MainScreen");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="human-male" size={24} color="gray" />
          )}
          label="검증하기"
          onPress={() => {
            navigation.navigate("PasswordScreen");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="ios-settings" size={24} color="gray" />
          )}
          label="설정"
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
      edgeWidth={0}
    >
      <Drawer.Screen
        options={{ drawerLabel: () => null }}
        name="로그인"
        component={First}
      />
      <Drawer.Screen name="인증화면" component={MainStack} />
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
