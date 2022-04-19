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
import { Picker } from "@react-native-picker/picker";
import * as SecureStore from "expo-secure-store";

class RegisterWms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bname: "",
      tankcap: "",
      btankcap: "",
      bnameerr: "",
      tankcaperr: "",
      btankcaperr: "",
      name: this.props.route.params.name,
      society: this.props.route.params.society,
      area: this.props.route.params.area,
      city: this.props.route.params.city,
      pin: this.props.route.params.pin,
      mobno: this.props.route.params.mobno,
      email: this.props.route.params.email,
      password: this.props.route.params.password,
    };
  }

  onRegister = (e) => {
    const isValid = this.formcapValidation();
    if (isValid) {
      this.setState({ bnameerr: "" });
      this.setState({ tankcaperr: "" });
      SecureStore.setItemAsync("name", this.state.name);
      SecureStore.setItemAsync("society", this.state.society);
      SecureStore.setItemAsync("area", this.state.area);
      SecureStore.setItemAsync("city", this.state.city);
      SecureStore.setItemAsync("pin", this.state.pin);
      SecureStore.setItemAsync("mobno", this.state.mobno);
      SecureStore.setItemAsync("email", this.state.email);
      SecureStore.setItemAsync("password", this.state.password);
      SecureStore.setItemAsync("bname", this.state.bname);
      SecureStore.setItemAsync("tankcap", this.state.tankcap);
      SecureStore.setItemAsync("btankcap", this.state.btankcap);
      SecureStore.setItemAsync("login", "false");
      this.props.navigation.navigate("RegisterFlash");
    }
  };

  formcapValidation = () => {
    let isValid = true;

    var bname = this.state.bname;
    var tankcap = this.state.tankcap;
    var btankcap = this.state.btankcap;
    var tankcapreg = /^[0-9]+$/;
    var mtankcap = tankcapreg.test(tankcap);
    var mbtankcap = tankcapreg.test(btankcap);
    if (bname == "") {
      this.setState({ bnameerr: "*Building Name Required !" });
      isValid = false;
    } else if (bname.length < 3) {
      this.setState({ bnameerr: "*Building Name is too short !" });
      isValid = false;
    } else if (tankcap == "") {
      this.setState({ tankcaperr: "*Please Enter Tank Capacity !" });
      this.setState({ bnameerr: "" });
      isValid = false;
    } else if (!mtankcap) {
      this.setState({ tankcaperr: "*Tank Capcity should be in digits" });
      this.setState({ bnameerr: "" });
      isValid = false;
    } else if (tankcap.length < 3) {
      this.setState({ tankcaperr: "*Enter valid Tank Capacity" });
      this.setState({ bnameerr: "" });

      isValid = false;
    } else if (tankcap < 400) {
      this.setState({ tankcaperr: "*Enter valid Tank Capacity(min 400L)" });
      this.setState({ bnameerr: "" });

      isValid = false;
    } else if (btankcap == "") {
      this.setState({ btankcaperr: "*Please Enter Tank Capacity !" });
      this.setState({ bnameerr: "" });
      this.setState({ tankcaperr: "" });
      isValid = false;
    } else if (!mbtankcap) {
      this.setState({ btankcaperr: "*Tank Capcity should be in digits" });
      this.setState({ bnameerr: "" });
      this.setState({ tankcaperr: "" });

      isValid = false;
    } else if (btankcap.length < 3) {
      this.setState({ btankcaperr: "*Enter valid Tank Capacity" });
      this.setState({ bnameerr: "" });
      this.setState({ tankcaperr: "" });

      isValid = false;
    } else if (btankcap <= 499) {
      this.setState({ btankcaperr: "*Enter valid Tank Capacity" });
      this.setState({ bnameerr: "" });
      this.setState({ tankcaperr: "" });

      isValid = false;
    }
    return isValid;
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#f0ad4e" />
          <View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 15,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#f0ad4e", fontWeight: "bold" }}>
                Information
              </Text>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => this.props.navigation.navigate("Register")}
              >
                <Text style={{ color: "red" }}>Edit details</Text>
                <AntDesign name="edit" size={20} color="red" />
              </TouchableOpacity>
            </View>

            <View style={{ padding: 10 }}>
              <View style={{ flexDirection: "row", padding: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Name</Text>
                <Text style={{ paddingLeft: 17 }}>
                  {this.props.route.params.name}
                </Text>
              </View>
              <View style={{ flexDirection: "row", padding: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Mobile</Text>
                <Text style={{ paddingLeft: 12 }}>
                  {this.props.route.params.mobno}
                </Text>
              </View>
              <View style={{ flexDirection: "row", padding: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Society</Text>
                <Text style={{ paddingLeft: 9 }}>
                  {this.props.route.params.society}
                </Text>
              </View>
              <View style={{ flexDirection: "row", padding: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Area</Text>
                <Text style={{ paddingLeft: 27 }}>
                  {this.props.route.params.area}
                </Text>
              </View>
              <View style={{ flexDirection: "row", padding: 5 }}>
                <Text style={{ fontWeight: "bold" }}>City</Text>
                <Text style={{ paddingLeft: 32 }}>
                  {this.props.route.params.city}
                </Text>
              </View>
              <View style={{ flexDirection: "row", padding: 5 }}>
                <Text style={{ fontWeight: "bold" }}>pin</Text>
                <Text style={{ paddingLeft: 38 }}>
                  {this.props.route.params.pin}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5
                name="building"
                size={24}
                style={{ padding: 10, paddingRight: 8 }}
                color="black"
              />
              <View>
                <TextInput
                  value={this.state.bname}
                  onChangeText={(bname) => this.setState({ bname })}
                  placeholder={"Enter Building name"}
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
                  {this.state.bnameerr}
                </Text>
              </View>
            </View>
            {/* OVERHEAD TANK CAPACITY */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Entypo
                name="water"
                style={{ padding: 10, paddingRight: 8 }}
                size={24}
                color="#80daeb"
              />
              <Text style={{ fontWeight: "bold" }}>
                Overhead WaterTank Capacity
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 40 }}>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    value={this.state.tankcap}
                    onChangeText={(tankcap) => this.setState({ tankcap })}
                    placeholder={"Enter tank capacity (in litre)"}
                    style={styles.capinput}
                  />
                  <Text
                    style={{
                      padding: 10,
                      color: "#6495ED",
                      fontWeight: "bold",
                    }}
                  >
                    Litre
                  </Text>
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
                    {this.state.tankcaperr}
                  </Text>
                </View>
              </View>
            </View>
            {/* BASEMENT TANK CAPACITY */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                name="water"
                style={{ padding: 10, paddingRight: 8 }}
                size={24}
                color="#80daeb"
              />
              <Text style={{ fontWeight: "bold" }}>
                Basement WaterTank Capacity
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 40 }}>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    value={this.state.btankcap}
                    onChangeText={(btankcap) => this.setState({ btankcap })}
                    placeholder={"Enter tank capacity (in litre)"}
                    style={styles.capinput}
                  />
                  <Text
                    style={{
                      padding: 10,
                      color: "#6495ED",
                      fontWeight: "bold",
                    }}
                  >
                    Litre
                  </Text>
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
                    {this.state.btankcaperr}
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

                  borderRadius: 4,
                  elevation: 3,
                  backgroundColor: "#f0ad4e",
                }}
                onPress={() => this.onRegister()}
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
                  Register
                </Text>
                <MaterialCommunityIcons
                  name="send-check-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",

              paddingTop: 15,
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
export default RegisterWms;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    width: Dimensions.get("window").width / 1.5,
    height: 50,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#f0ad4e",
  },
  capinput: {
    width: Dimensions.get("window").width / 2,
    height: 50,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#80daeb",
  },
});
