import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions,
  Image,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  EvilIcons,
  Feather,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      email: "",
      password: "",

      emailerr: "",
      passworderr: "",
      secureemail: "",
      securepassword: "",
      showpass: true,
    };

    SecureStore.getItemAsync("login").then((value) => {
      this.setState({ login: value });
    });
    SecureStore.getItemAsync("email").then((value) => {
      this.setState({ secureemail: value });
      console.log("email=" + value);
    });
    SecureStore.getItemAsync("password").then((value) => {
      this.setState({ securepassword: value });
      console.log("password=" + value);
    });

    if (this.state.login == "true") {
      this.props.navigation.navigate("Home");
    }
  }
  CheckLogin() {
    if (this.state.email == "") {
      this.setState({ passworderr: "*Enter Login details !" });
    } else if (this.state.email == this.state.secureemail) {
      this.setState({ emailerr: "" });
      if (this.state.password == this.state.securepassword) {
        this.setState({ emailerr: "" });
        this.setState({ passworderr: "" });
        SecureStore.setItemAsync("login", "true");
        ToastAndroid.show("Your're logged in!", ToastAndroid.SHORT);
        this.props.navigation.navigate("Home");
      } else {
        this.setState({ passworderr: "*Invalid Login Details !" });
      }
    } else {
      this.setState({ emailerr: "*This email is not registered !" });
      this.setState({ passworderr: "" });
    }
  }
  showPassword = () => {
    this.setState({ showpass: !this.state.showpass });
  };
  render() {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor="#80daeb" />
        <ScrollView>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                margin: 15,
              }}
            >
              <MaterialIcons name="water-damage" size={40} color="#80daeb" />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#80daeb",
                  marginRight: 5,
                }}
              >
                WMS Login
              </Text>
              <AntDesign name="login" size={22} color="#80daeb" />
            </View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Entypo
                  name="email"
                  style={{ paddingTop: 10, paddingRight: 5 }}
                  size={18}
                  color="black"
                />
                <View>
                  <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder={"User Email"}
                    style={styles.input}
                  />
                  <Text
                    style={{
                      padding: 1,
                      paddingLeft: 5,
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    {this.state.emailerr}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="form-textbox-password"
                  style={{ paddingTop: 10, paddingRight: 5 }}
                  size={18}
                  color="black"
                />
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <TextInput
                      value={this.state.password}
                      onChangeText={(password) => this.setState({ password })}
                      placeholder={"Password"}
                      secureTextEntry={this.state.showpass}
                      style={styles.input}
                    />
                    <TouchableOpacity onPress={() => this.showPassword()}>
                      <Entypo
                        name="eye-with-line"
                        style={{ paddingTop: 10, paddingLeft: 3 }}
                        size={17}
                        color="gray"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text
                      style={{
                        padding: 1,
                        paddingLeft: 5,
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      {this.state.passworderr}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 4,
                elevation: 3,
                backgroundColor: "#80daeb",
              }}
              onPress={() => this.CheckLogin()}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 21,
                  fontWeight: "bold",
                  letterSpacing: 2,
                  color: "white",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 15 }}
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 21,
                  fontWeight: "bold",
                  letterSpacing: 0.25,
                  color: "#80daeb",
                }}
              >
                New Register ? click here
              </Text>
            </TouchableOpacity>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",

                paddingTop: 25,
                paddingBottom: 35,

                margin: 10,
              }}
            >
              <Image
                style={{ width: 70, height: 70 }}
                source={require("../assets/company.png")}
              />
              <Text style={{ fontSize: 13, margin: 5 }}>Created By</Text>
              <Text
                style={{ fontSize: 15, color: "#5cb85c", fontWeight: "bold" }}
              >
                Whizkey (OPC) Pvt Ltd
              </Text>
              <Text>All Rights Reserved!</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Dimensions.get("window").height / 5,
  },
  input: {
    width: Dimensions.get("window").width / 1.5,
    height: 50,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#80daeb",
  },
});
