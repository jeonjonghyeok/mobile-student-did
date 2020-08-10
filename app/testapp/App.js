//TEST

import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import QRCode from "react-native-qrcode-svg";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <QRCode logoSize={30} value="dsadasdasdas" />
      <Text>Home화면</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Profile page"
        onPress={() =>
          navigation.navigate("Profile", { name: "Custom profile header" })
        }
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.goBack("Home")} />
      <Button
        title="Go back to first screen in stack with popToTop"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
function ProfileScreen({ navigation }) {
  return (
    <View style={styles.box}>
      <Text>Profile Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
        <Stack.Screen name="Details" component={DetailsScreen} />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })}
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
