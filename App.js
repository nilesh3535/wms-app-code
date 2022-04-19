import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  LogBox,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { checkConnected } from "./functions";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RegisterWms from "./screens/RegisterWms";
import RegisterFlash from "./screens/RegisterFlash";
import MyProfile from "./screens/MyProfile";
const Stack = createStackNavigator();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
export default function App() {
  const [connectStatus, setConnectStatus] = useState(false);
  useEffect(() => {
    checkConnected().then((res) => {
      setConnectStatus(res);
    });
  });
  checkConnectedAgain = () => {
    checkConnected().then((res) => {
      setConnectStatus(res);
    });
  };
  return connectStatus ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#80daeb" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: "Society Register",
            headerStyle: {
              backgroundColor: "#f0ad4e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="RegisterWms"
          component={RegisterWms}
          options={{
            title: "Enter  Details",
            headerStyle: {
              backgroundColor: "#f0ad4e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="RegisterFlash"
          component={RegisterFlash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            title: "My Profile",
            headerStyle: {
              backgroundColor: "#80daeb",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5abcd8" style="light" />
      <Button title="Reload" onPress={checkConnectedAgain} />
      <ActivityIndicator size="small" color="#0000ff" />
      <Text>No Internet Connection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
