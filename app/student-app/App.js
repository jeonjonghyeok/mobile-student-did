//Student

import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>Home Screen</Text>
      <Button title="학생증" onPress={() => navigation.navigate("Sid")} />
      <Button title="개인정보" onPress={() => navigation.navigate("Profile")} />
      <Button title="게시판" onPress={() => navigation.navigate("Board")} />
      <Button
        title="부가기능"
        onPress={() => navigation.navigate("Addition")}
      />
      <Button title="고객센터" onPress={() => navigation.navigate("Service")} />
    </View>
  );
}

function SidScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>학생증</Text>
      <Button title="QR코드" onPress={() => navigation.navigate("Qr")} />
      <Button title="혜택" onPress={() => navigation.navigate("Benefit")} />
    </View>
  );
}
function QrScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>QR코드</Text>
      <Button title="이전화면으로" onPress={() => navigation.goBack("Home")} />
      <Button
        title="초기화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function BenefitScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>혜택정보</Text>
      <Button title="이전화면으로" onPress={() => navigation.goBack("Home")} />
      <Button
        title="초기화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>개인정보</Text>
      <Button
        title="정보제공내역"
        onPress={() => navigation.navigate("Response")}
      />
      <Button
        title="정보요청내역"
        onPress={() => navigation.navigate("Request")}
      />
    </View>
  );
}
function ResScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>정보제공내역</Text>
      <Button title="이전화면으로" onPress={() => navigation.goBack("Home")} />
      <Button
        title="초기화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
function ReqScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>정보요청내역</Text>
      <Button title="이전화면으로" onPress={() => navigation.goBack("Home")} />
      <Button
        title="초기화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
function BoardScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>게시판</Text>
      <Button title="이전화면으로" onPress={() => navigation.goBack("Home")} />
      <Button
        title="초기화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
function AddtionScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>부가기능</Text>
      <Button title="이전화면으로" onPress={() => navigation.goBack("Home")} />
      <Button
        title="초기화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
function ServiceScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>고객센터</Text>
      <Button title="이전화면으로" onPress={() => navigation.goBack("Home")} />
      <Button
        title="초기화면으로 돌아가기"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#00cc00"
              />
            ),
            headerStyle: { backgroundColor: "purple" },
            headerTitleColor: "#fff",
            headerTitleStyle: {
              fontWeight: "normal",
            },
          }}
        />
        <Stack.Screen
          name="Sid"
          component={SidScreen}
          options={{ title: "학생증" }}
        />
        <Stack.Screen
          name="Qr"
          component={QrScreen}
          options={{ title: "QR코드" }}
        />
        <Stack.Screen
          name="Benefit"
          component={BenefitScreen}
          options={{ title: "혜택정보" }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "개인 정보" }}
        />
        <Stack.Screen
          name="Response"
          component={ResScreen}
          options={{ title: "정보 제공내역" }}
        />
        <Stack.Screen
          name="Request"
          component={ReqScreen}
          options={{ title: "정보 요청내역" }}
        />
        <Stack.Screen
          name="Board"
          component={BoardScreen}
          options={{ title: "게시판" }}
        />
        <Stack.Screen
          name="Addition"
          component={AddtionScreen}
          options={{ title: "부가기능" }}
        />
        <Stack.Screen
          name="Service"
          component={ServiceScreen}
          options={{ title: "고객센터" }}
        />
      </Stack.Navigator>
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

export default App;
