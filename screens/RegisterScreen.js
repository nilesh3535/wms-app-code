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
  Image,
  Dimensions,
  Touchable,
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

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      society: "",
      area: "",
      city: "",
      pin: "",
      mobno: "",
      email: "",
      password: "",
      cpassword: "",
      nameerr: "",
      societyerr: "",
      areaerr: "",
      cityerr: "",
      pinerr: "",
      mobnoerr: "",
      emailerr: "",
      passworderr: "",
      cpassworderr: "",
      showpass: true,
      passmatch: false,
    };
  }

  onSubmit = (e) => {
    const isValid = this.formValidation();
    if (isValid) {
      this.setState({ nameerr: "" });
      this.setState({ societyerr: "" });

      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ pinerr: "" });
      this.setState({ mobnoerr: "" });
      this.setState({ emailerr: "" });
      this.setState({ passworderr: "" });
      this.setState({ cpassworderr: "" });
      this.props.navigation.navigate("RegisterWms", {
        name: this.state.name,
        society: this.state.society,
        area: this.state.area,
        city: this.state.city,
        pin: this.state.pin,
        mobno: this.state.mobno,
        email: this.state.email,
        password: this.state.password,
      });
    }
  };

  formValidation = () => {
    let isValid = true;

    var name = this.state.name;
    var namereg = /^[A-z ]+$/;
    var mname = namereg.test(name);
    var society = this.state.society;
    var area = this.state.area;
    var city = this.state.city;
    var cityreg = /^[A-z ]+$/;
    var mcity = cityreg.test(city);
    var pin = this.state.pin;
    var pinreg = /^[0-9]+$/;
    var mpin = pinreg.test(pin);
    var mobno = this.state.mobno;
    var mobnoreg = /^[0-9]+$/;
    var mobnovalid = mobnoreg.test(this.state.mobno);
    var email = this.state.email;
    var emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailvalid = emailreg.test(this.state.email);

    var password = this.state.password;
    var cpassword = this.state.cpassword;
    var passreg = /^[A-z0-9]+$/;
    var validpassword = passreg.test(this.state.password);
    if (name == "") {
      this.setState({ nameerr: "*Name required !" });
      isValid = false;
    } else if (!mname) {
      this.setState({ nameerr: "*Enter valid Name !(:characters)" });
      isValid = false;
    } else if (name.length < 6) {
      this.setState({ nameerr: "*Name is too short !" });
      isValid = false;
    } else if (society == "") {
      this.setState({ societyerr: "*Society Name required !" });
      this.setState({ nameerr: "" });
      isValid = false;
    } else if (society.length < 5) {
      this.setState({ societyerr: "*Society Name is too short !" });
      this.setState({ nameerr: "" });
      isValid = false;
    } else if (area == "") {
      this.setState({ areaerr: "*Enter Area Name !" });
      this.setState({ nameerr: "" });
      this.setState({ societyerr: "" });
      isValid = false;
    } else if (area.length < 4) {
      this.setState({ areaerr: "*Area Name is too short !" });
      this.setState({ nameerr: "" });
      this.setState({ societyerr: "" });
      isValid = false;
    } else if (city == "") {
      this.setState({ cityerr: "*City Name required !" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ societyerr: "" });
      isValid = false;
    } else if (!mcity) {
      this.setState({ cityerr: "*Enter valid City Name !(:characters)" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ societyerr: "" });
      isValid = false;
    } else if (city.length < 3) {
      this.setState({ cityerr: "*City is too short !" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ societyerr: "" });
      isValid = false;
    } else if (pin == "") {
      this.setState({ pinerr: "*Pincode required !" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ societyerr: "" });
      isValid = false;
    } else if (!mpin) {
      this.setState({ pinerr: "*Enter valid pincode!(:digits)" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ societyerr: "" });
      isValid = false;
    } else if (pin.length !== 6) {
      this.setState({ pinerr: "*Enter valid pincode length!(:6 digits)" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ societyerr: "" });
      isValid = false;
    } else if (mobno == "") {
      this.setState({ mobnoerr: "*Enter Mobile Number" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ pinerr: "" });
      this.setState({ societyerr: "" });
      isValid = false;
    } else if (!mobnovalid) {
      this.setState({ mobnoerr: "*Mobile Number is not valid!" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ pinerr: "" });
      this.setState({ societyerr: "" });
      isValid = false;
    } else if (mobno.length !== 10) {
      this.setState({ mobnoerr: "*Mobile Number should be 10-digits!" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ pinerr: "" });
      this.setState({ societyerr: "" });
      isValid = false;
    } else if (email == "") {
      this.setState({ emailerr: "*Email cannot be empty !" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ pinerr: "" });
      this.setState({ societyerr: "" });
      this.setState({ mobnoerr: "" });
      isValid = false;
    } else if (!emailvalid) {
      this.setState({ emailerr: "*Email address is not valid !" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ pinerr: "" });
      this.setState({ societyerr: "" });
      this.setState({ mobnoerr: "" });
      isValid = false;
    } else if (password == "") {
      this.setState({ passworderr: "*Create New Password !" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ pinerr: "" });
      this.setState({ societyerr: "" });
      this.setState({ mobnoerr: "" });
      this.setState({ emailerr: "" });
      isValid = false;
    } else if (!validpassword) {
      this.setState({ passworderr: "*Password not valid !(:character,digit)" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ pinerr: "" });
      this.setState({ societyerr: "" });
      this.setState({ mobnoerr: "" });
      this.setState({ emailerr: "" });
      isValid = false;
    } else if (password.length < 6) {
      this.setState({ passworderr: "*Password is too short!(length:above 6)" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ pinerr: "" });
      this.setState({ societyerr: "" });
      this.setState({ mobnoerr: "" });
      this.setState({ emailerr: "" });
      isValid = false;
    } else if (password !== cpassword) {
      this.setState({ cpassworderr: "*Password not matching!" });
      this.setState({ nameerr: "" });
      this.setState({ areaerr: "" });
      this.setState({ cityerr: "" });
      this.setState({ pinerr: "" });
      this.setState({ societyerr: "" });
      this.setState({ mobnoerr: "" });
      this.setState({ emailerr: "" });
      this.setState({ passworderr: "" });
      isValid = false;
    }
    return isValid;
  };
  showPassword = () => {
    this.setState({ showpass: !this.state.showpass });
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#f0ad4e" />
          <View>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="user-plus"
                size={20}
                style={{ padding: 10, paddingRight: 8 }}
                color="black"
              />
              <View>
                <TextInput
                  value={this.state.name}
                  onChangeText={(name) => this.setState({ name })}
                  placeholder={"Enter your Name"}
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
                  {this.state.nameerr}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Entypo
                  name="address"
                  size={20}
                  style={{ padding: 10, paddingRight: 8 }}
                  color="black"
                />
              </View>
              <View>
                <TextInput
                  value={this.state.society}
                  onChangeText={(society) => this.setState({ society })}
                  placeholder={"Society Name"}
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
                  {this.state.societyerr}
                </Text>
                <TextInput
                  value={this.state.area}
                  onChangeText={(area) => this.setState({ area })}
                  placeholder={"Area"}
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
                  {this.state.areaerr}
                </Text>
                <View style={{}}>
                  <View style={{ flexDirection: "row" }}>
                    <TextInput
                      value={this.state.city}
                      onChangeText={(city) => this.setState({ city })}
                      placeholder={"City"}
                      style={styles.city}
                    />
                    <TextInput
                      value={this.state.pin}
                      onChangeText={(pin) => this.setState({ pin })}
                      placeholder={"Pincode"}
                      style={styles.city}
                    />
                  </View>
                  <Text
                    style={{
                      padding: 1,
                      paddingLeft: 5,
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    {this.state.cityerr}
                    {this.state.pinerr}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Entypo
                style={{ padding: 9, paddingRight: 8 }}
                name="mobile"
                size={20}
                color="black"
              />
              <View>
                <TextInput
                  value={this.state.mobno}
                  onChangeText={(mobno) => this.setState({ mobno })}
                  placeholder={"Mobile Number"}
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
                  {this.state.mobnoerr}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Entypo
                name="email"
                style={{ padding: 10, paddingRight: 8 }}
                size={18}
                color="black"
              />
              <View>
                <TextInput
                  value={this.state.email}
                  onChangeText={(email) => this.setState({ email })}
                  placeholder={"Enter Email"}
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
                style={{ padding: 10, paddingRight: 8 }}
                size={18}
                color="black"
              />

              <View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={"Enter Password"}
                    secureTextEntry={this.state.showpass}
                    style={styles.passwordinp}
                  />
                  <TouchableOpacity onPress={() => this.showPassword()}>
                    <Entypo
                      name="eye-with-line"
                      style={{ padding: 10 }}
                      size={17}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>

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
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="repeat-outline"
                style={{ padding: 10, paddingRight: 8 }}
                size={18}
                color="black"
              />

              <View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    value={this.state.cpassword}
                    onChangeText={(cpassword) => {
                      this.setState({ cpassword });
                      if (this.state.password == cpassword) {
                        this.setState({ passmatch: true });
                      } else {
                        this.setState({ passmatch: false });
                      }
                    }}
                    placeholder={"Repeat Password"}
                    secureTextEntry={true}
                    style={styles.passwordinp}
                  />
                  {this.state.passmatch && (
                    <Ionicons
                      name="md-checkmark-done-circle"
                      style={{ padding: 10 }}
                      size={17}
                      color="green"
                    />
                  )}
                </View>
                <Text
                  style={{
                    padding: 1,
                    paddingLeft: 5,
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {this.state.cpassworderr}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: 16,
                width: 100,
                height: 50,
                borderRadius: 4,
                elevation: 3,
                backgroundColor: "#f0ad4e",
              }}
              onPress={() => this.onSubmit()}
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
                Next
              </Text>
              <MaterialIcons name="navigate-next" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 15 }}
              onPress={() => this.props.navigation.navigate("Login")}
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
                Already register ? Login
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",

              paddingTop: 5,
              paddingBottom: 5,

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
    );
  }
}
export default RegisterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  input: {
    width: Dimensions.get("window").width / 1.5,
    height: 50,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#f0ad4e",
  },
  passwordinp: {
    width: Dimensions.get("window").width / 1.7,
    height: 50,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#f0ad4e",
  },

  city: {
    width: Dimensions.get("window").width / 3,
    height: 50,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#f0ad4e",
    marginRight: 1,
  },
});
