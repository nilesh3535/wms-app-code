import React, { Component, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Switch,
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
import Axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Table, Row, Rows } from "react-native-table-component";

const HomeScreen = ({ navigation }) => {
  const [waterlevel, setWaterlevel] = useState("");
  const [bwaterlevel, setBWaterlevel] = useState("");
  const [tankcap, setTankCap] = useState("");
  const [btankcap, setBTankCap] = useState("");
  const [motor, setMotor] = useState("");

  const [availablewater, setAvailablewater] = useState("");
  const [bavailablewater, setBAvailablewater] = useState("");

  const [turbidity, setturbidity] = useState("");
  const [bturbidity, setBturbidity] = useState("");

  const [isTurn, setisTurn] = useState(false);
  const [mview, setMview] = useState(false);

  const [imglow, setImglow] = useState(false);
  const [img10, setImg10] = useState(false);
  const [img20, setImg20] = useState(false);
  const [img30, setImg30] = useState(false);
  const [img40, setImg40] = useState(false);
  const [img50, setImg50] = useState(false);
  const [img60, setImg60] = useState(false);
  const [img70, setImg70] = useState(false);
  const [img80, setImg80] = useState(false);
  const [img90, setImg90] = useState(false);
  const [img100, setImg100] = useState(false);

  const [bimglow, setBImglow] = useState(false);
  const [bimg10, setBImg10] = useState(false);
  const [bimg20, setBImg20] = useState(false);
  const [bimg30, setBImg30] = useState(false);
  const [bimg40, setBImg40] = useState(false);
  const [bimg50, setBImg50] = useState(false);
  const [bimg60, setBImg60] = useState(false);
  const [bimg70, setBImg70] = useState(false);
  const [bimg80, setBImg80] = useState(false);
  const [bimg90, setBImg90] = useState(false);
  const [bimg100, setBImg100] = useState(false);

  const [login, setLogin] = useState("");

  SecureStore.getItemAsync("tankcap").then((value) => {
    setTankCap(value);
    console.log("capacity=" + value);
  });
  SecureStore.getItemAsync("btankcap").then((value) => {
    setBTankCap(value);
    console.log("b tank capacity=" + value);
  });
  SecureStore.getItemAsync("motor").then((value) => {
    if (value == "ON") {
      setisTurn(true);
    } else {
      setisTurn(false);
    }
    console.log("MOTOR status=" + value);
  });
  SecureStore.getItemAsync("login").then((value) => {
    setLogin(value);
  });
  if (login == "true") {
    navigation.navigate("Home");
  } else {
    navigation.navigate("Login");
  }
  useEffect(() => {
    const timer = setInterval(() => {
      Axios.get("http://139.59.90.224:1880/WMS/APP").then((response) => {
        console.log(response.data);
        Axios.get("http://139.59.90.224:1880/WMS/APPT").then((response) => {
          console.log(response.data);
          setturbidity(response.data);
        });
        setWaterlevel(response.data);
        if (response.data == "Water level Very Low") {
          setAvailablewater("0.01");
          setImglow(true);
          setImg10(false);
          setImg20(false);
          setImg30(false);
          setImg40(false);
          setImg50(false);
          setImg60(false);
          setImg70(false);
          setImg80(false);
          setImg90(false);
          setImg100(false);
        }
        if (response.data == "Water level 10%") {
          setAvailablewater("0.1");
          setImglow(false);
          setImg10(true);
          setImg20(false);
          setImg30(false);
          setImg40(false);
          setImg50(false);
          setImg60(false);
          setImg70(false);
          setImg80(false);
          setImg90(false);
          setImg100(false);
        }
        if (response.data == "Water level 20%") {
          setAvailablewater("0.2");

          setImglow(false);
          setImg10(false);
          setImg20(true);
          setImg30(false);
          setImg40(false);
          setImg50(false);
          setImg60(false);
          setImg70(false);
          setImg80(false);
          setImg90(false);
          setImg100(false);
        }
        if (response.data == "Water level 30%") {
          setAvailablewater("0.3");

          setImglow(false);
          setImg10(false);
          setImg20(false);
          setImg30(true);
          setImg40(false);
          setImg50(false);
          setImg60(false);
          setImg70(false);
          setImg80(false);
          setImg90(false);
          setImg100(false);
        }
        if (response.data == "Water level 40%") {
          setAvailablewater("0.4");

          setImglow(false);
          setImg10(false);
          setImg20(false);
          setImg30(false);
          setImg40(true);
          setImg50(false);
          setImg60(false);
          setImg70(false);
          setImg80(false);
          setImg90(false);
          setImg100(false);
        }
        if (response.data == "Water level 50%") {
          setAvailablewater("0.5");
          setImglow(false);
          setImg10(false);
          setImg20(false);
          setImg30(false);
          setImg40(false);
          setImg50(true);
          setImg60(false);
          setImg70(false);
          setImg80(false);
          setImg90(false);
          setImg100(false);
        }
        if (response.data == "Water level 60%") {
          setAvailablewater("0.6");

          setImglow(false);
          setImg10(false);
          setImg20(false);
          setImg30(false);
          setImg40(false);
          setImg50(false);
          setImg60(true);
          setImg70(false);
          setImg80(false);
          setImg90(false);
          setImg100(false);
        }
        if (response.data == "Water level 70%") {
          setAvailablewater("0.7");
          setImglow(false);
          setImg10(false);
          setImg20(false);
          setImg30(false);
          setImg40(false);
          setImg50(false);
          setImg60(false);
          setImg70(true);
          setImg80(false);
          setImg90(false);
          setImg100(false);
        }
        if (response.data == "Water level 80%") {
          setAvailablewater("0.8");

          setImglow(false);
          setImg10(false);
          setImg20(false);
          setImg30(false);
          setImg40(false);
          setImg50(false);
          setImg60(false);
          setImg70(false);
          setImg80(true);
          setImg90(false);
          setImg100(false);
        }
        if (response.data == "Water level 90%") {
          setAvailablewater("0.9");

          setImglow(false);
          setImg10(false);
          setImg20(false);
          setImg30(false);
          setImg40(false);
          setImg50(false);
          setImg60(false);
          setImg70(false);
          setImg80(false);
          setImg90(true);
          setImg100(false);
        }
        if (response.data == "Water level 100%") {
          setAvailablewater("1");
          setImglow(false);
          setImg10(false);
          setImg20(false);
          setImg30(false);
          setImg40(false);
          setImg50(false);
          setImg60(false);
          setImg70(false);
          setImg80(false);
          setImg90(false);
          setImg100(true);
        }
      });
      Axios.get("http://139.59.90.224:1880/WMS/APP1").then((response) => {
        console.log(response.data);
        Axios.get("http://139.59.90.224:1880/WMS/APPT").then((response) => {
          console.log(response.data);
          setBturbidity(response.data);
        });
        setBWaterlevel(response.data);
        if (response.data == "Water level Very Low") {
          setBAvailablewater("0.01");
          setBImglow(true);
          setBImg10(false);
          setBImg20(false);
          setBImg30(false);
          setBImg40(false);
          setBImg50(false);
          setBImg60(false);
          setBImg70(false);
          setBImg80(false);
          setBImg90(false);
          setBImg100(false);
        }
        if (response.data == "Water level 10%") {
          setBAvailablewater("0.1");
          setBImglow(false);
          setBImg10(true);
          setBImg20(false);
          setBImg30(false);
          setBImg40(false);
          setBImg50(false);
          setBImg60(false);
          setBImg70(false);
          setBImg80(false);
          setBImg90(false);
          setBImg100(false);
        }
        if (response.data == "Water level 20%") {
          setBAvailablewater("0.2");

          setBImglow(false);
          setBImg10(false);
          setBImg20(true);
          setBImg30(false);
          setBImg40(false);
          setBImg50(false);
          setBImg60(false);
          setBImg70(false);
          setBImg80(false);
          setBImg90(false);
          setBImg100(false);
        }
        if (response.data == "Water level 30%") {
          setBAvailablewater("0.3");

          setBImglow(false);
          setBImg10(false);
          setBImg20(false);
          setBImg30(true);
          setBImg40(false);
          setBImg50(false);
          setBImg60(false);
          setBImg70(false);
          setBImg80(false);
          setBImg90(false);
          setBImg100(false);
        }
        if (response.data == "Water level 40%") {
          setBAvailablewater("0.4");

          setBImglow(false);
          setBImg10(false);
          setBImg20(false);
          setBImg30(false);
          setBImg40(true);
          setBImg50(false);
          setBImg60(false);
          setBImg70(false);
          setBImg80(false);
          setBImg90(false);
          setBImg100(false);
        }
        if (response.data == "Water level 50%") {
          setBAvailablewater("0.5");
          setBImglow(false);
          setBImg10(false);
          setBImg20(false);
          setBImg30(false);
          setBImg40(false);
          setBImg50(true);
          setBImg60(false);
          setBImg70(false);
          setBImg80(false);
          setBImg90(false);
          setBImg100(false);
        }
        if (response.data == "Water level 60%") {
          setBAvailablewater("0.6");

          setBImglow(false);
          setBImg10(false);
          setBImg20(false);
          setBImg30(false);
          setBImg40(false);
          setBImg50(false);
          setBImg60(true);
          setBImg70(false);
          setBImg80(false);
          setBImg90(false);
          setBImg100(false);
        }
        if (response.data == "Water level 70%") {
          setBAvailablewater("0.7");
          setBImglow(false);
          setBImg10(false);
          setBImg20(false);
          setBImg30(false);
          setBImg40(false);
          setBImg50(false);
          setBImg60(false);
          setBImg70(true);
          setBImg80(false);
          setBImg90(false);
          setBImg100(false);
        }
        if (response.data == "Water level 80%") {
          setBAvailablewater("0.8");

          setBImglow(false);
          setBImg10(false);
          setBImg20(false);
          setBImg30(false);
          setBImg40(false);
          setBImg50(false);
          setBImg60(false);
          setBImg70(false);
          setBImg80(true);
          setBImg90(false);
          setBImg100(false);
        }
        if (response.data == "Water level 90%") {
          setBAvailablewater("0.9");

          setBImglow(false);
          setBImg10(false);
          setBImg20(false);
          setBImg30(false);
          setBImg40(false);
          setBImg50(false);
          setBImg60(false);
          setBImg70(false);
          setBImg80(false);
          setBImg90(true);
          setBImg100(false);
        }
        if (response.data == "Water level 100%") {
          setBAvailablewater("1");
          setBImglow(false);
          setBImg10(false);
          setBImg20(false);
          setBImg30(false);
          setBImg40(false);
          setBImg50(false);
          setBImg60(false);
          setBImg70(false);
          setBImg80(false);
          setBImg90(false);
          setBImg100(true);
        }
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#80daeb" />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <MaterialIcons name="water-damage" size={37} color="#fff" />
                <Text
                  style={{
                    fontSize: 18,
                    padding: 5,
                    fontWeight: "bold",
                    color: "#80daeb",
                    textShadowColor: "#fff",
                    textShadowOffset: { width: 2, height: 2 },
                    textShadowRadius: 10,
                    borderWidth: 1,
                    borderColor: "#5F9EA0",
                    borderRadius: 50,
                    backgroundColor: "white",
                  }}
                >
                  WMS
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{}}
                onPress={() => navigation.navigate("MyProfile")}
              >
                <FontAwesome5 name="user-circle" size={26} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                setMview(false);
              }}
              style={{
                width: "50%",
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#fff",
              }}
            >
              <Text
                style={{
                  color: "skyblue",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                TANK STATUS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMview(true);
              }}
              style={{
                width: "50%",
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: "#F5F5F5",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="pipe"
                size={24}
                color={isTurn ? "skyblue" : "black"}
              />
              <Text
                style={{
                  color: "#000080",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                MOTOR STATUS
              </Text>
            </TouchableOpacity>
          </View>
          {mview && (
            <View
              style={{
                backgroundColor: "#F5F5F5",
                padding: 10,

                borderRadius: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: "#FFF",

                  marginTop: 10,
                  borderRadius: 4,
                  borderColor: "#000080",
                  borderWidth: 0.2,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#000080",
                      fontWeight: "bold",
                    }}
                  >
                    MOTOR DETAILS :
                  </Text>

                  {isTurn ? (
                    <View style={{}}>
                      <Text style={{ color: "#28a745", fontWeight: "bold" }}>
                        MOTOR IS ON
                      </Text>
                    </View>
                  ) : (
                    <View>
                      <Text style={{ color: "#DC143C", fontWeight: "bold" }}>
                        MOTOR IS OFF
                      </Text>
                    </View>
                  )}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingBottom: 20,
                  }}
                >
                  <Text
                    style={{
                      color: isTurn ? "#28a745" : "#DC143C",
                      fontWeight: "bold",
                    }}
                  >
                    MANUAL MOTOR
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingLeft: 2,
                      borderRadius: 4,
                      borderColor: "#000080",
                      borderWidth: 0.5,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: isTurn ? "black" : "#DC143C",
                      }}
                    >
                      OFF
                    </Text>
                    <Switch
                      trackColor={{ false: "#28a745", true: "#767577" }}
                      thumbColor={isTurn ? "#28a745" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={() => {
                        if (isTurn == true) {
                          Axios.post("http://139.59.90.224:1880/WMS/RLY", {
                            relay: "0",
                          }).then((response) => {
                            //alert("OFF");
                            SecureStore.setItemAsync("motor", "OFF");
                            setisTurn(false);
                            ToastAndroid.show(
                              "MOTOR IS OFF !",
                              ToastAndroid.SHORT
                            );
                          });
                        } else {
                          Axios.post("http://139.59.90.224:1880/WMS/RLY", {
                            relay: "1",
                          }).then((response) => {
                            //alert("ON");
                            SecureStore.setItemAsync("motor", "ON");
                            setisTurn(true);
                            ToastAndroid.show(
                              "MOTOR IS ON !",
                              ToastAndroid.SHORT
                            );
                          });
                        }
                      }}
                      value={isTurn}
                      style={{ marginBottom: 10 }}
                    />
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: isTurn ? "#28a745" : "#767577",
                      }}
                    >
                      ON
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}

          <View
            style={{
              padding: 6,
              borderRadius: 4,
              backgroundColor: "#FFF",
              borderTopColor: "#80daeb",
              borderTopWidth: 0.5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#17bbe8",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              OVERHEAD TANK DETAILS
            </Text>
          </View>
          <View
            style={{
              paddingTop: 5,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                alignItems: "center",
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              {imglow && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {img10 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {img20 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {img30 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {img40 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {img50 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {img60 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {img70 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {img80 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {img90 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {img100 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
            </View>
            <View
              style={{
                flexDirection: "column-reverse",
                paddingBottom: 10,
                width: Dimensions.get("window").width / 1.9,
              }}
            >
              <View
                style={{
                  padding: 5,
                  borderRadius: 4,
                  backgroundColor: "#FFF",
                  borderColor: "#80daeb",
                  borderWidth: 0.5,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginBottom: 10,
                    color: "#90EE90",
                    textAlign: "center",
                  }}
                >
                  OVERHEAD TANK
                </Text>
                <Image
                  style={{
                    marginLeft: 2,
                    width: 15,
                    height: 15,
                    resizeMode: "cover",
                  }}
                  source={require("../assets/refresh.gif")}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 2,
                    borderColor: "#80daeb",
                    borderWidth: 0.5,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#17bbe8" }}>
                    {waterlevel}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 2,
                    borderColor: "#80daeb",
                    borderWidth: 0.5,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#5cb85c" }}>
                    Current Water
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#17bbe8" }}>
                    {tankcap * availablewater} Litre
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 2,
                    borderColor: "#80daeb",
                    borderWidth: 0.5,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#5cb85c" }}>
                    Total Tank Capacity
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#17bbe8" }}>
                    {tankcap} Litre
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 2,
                    borderColor: "#80daeb",
                    borderWidth: 0.5,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#5cb85c" }}>
                    Turbidity info
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#17bbe8" }}>
                    Clean Water
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              padding: 5,
              borderRadius: 4,
              backgroundColor: "#FFF",
              borderTopColor: "#80daeb",
              borderTopWidth: 0.5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#008B8B",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              BASEMENT TANK DETAILS
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <View style={{ alignItems: "center", paddingLeft: 10 }}>
              {bimglow && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {bimg10 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {bimg20 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {bimg30 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {bimg40 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {bimg50 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {bimg60 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {bimg70 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {bimg80 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {bimg90 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={{
                        backgroundColor: "#fff",
                        height: Dimensions.get("window").width / 25,
                      }}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
              {bimg100 && (
                <View style={{ flexDirection: "row" }}>
                  <Table
                    style={{
                      width: Dimensions.get("window").width / 2.5,
                    }}
                    borderStyle={{ borderWidth: 0.5, borderColor: "skyblue" }}
                  >
                    <Rows
                      data={[["100"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["90"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["80"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["70"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["60"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["50"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["40"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["30"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["20"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["10"]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                    <Rows
                      data={[["Low Level "]]}
                      style={styles.tabwater}
                      textStyle={{
                        color: "gray",
                        fontSize: 10,
                        textAlign: "right",
                      }}
                    />
                  </Table>
                </View>
              )}
            </View>
            <View
              style={{
                flexDirection: "column-reverse",

                width: Dimensions.get("window").width / 1.9,
              }}
            >
              <View
                style={{
                  padding: 5,
                  borderRadius: 4,
                  backgroundColor: "#FFF",
                  borderColor: "#80daeb",
                  borderWidth: 0.5,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginBottom: 10,
                    color: "#90EE90",
                    textAlign: "center",
                  }}
                >
                  BASEMENT TANK
                </Text>
                <Image
                  style={{
                    marginLeft: 2,
                    width: 15,
                    height: 15,
                    resizeMode: "cover",
                  }}
                  source={require("../assets/refresh.gif")}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 2,
                    borderColor: "#80daeb",
                    borderWidth: 0.5,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#008B8B" }}>
                    {bwaterlevel}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 2,
                    borderColor: "#80daeb",
                    borderWidth: 0.5,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#5cb85c" }}>
                    Current Water
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#008B8B" }}>
                    {btankcap * bavailablewater} Litre
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 2,
                    borderColor: "#80daeb",
                    borderWidth: 0.5,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#5cb85c" }}>
                    Total Tank Capacity
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#008B8B" }}>
                    {btankcap} Litre
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderRadius: 2,
                    borderColor: "#80daeb",
                    borderWidth: 0.5,
                    borderTopWidth: 0,
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#5cb85c" }}>
                    Turbidity info
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#008B8B" }}>
                    Clean Water
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
              padding: 5,
              borderRadius: 4,
              backgroundColor: "#FFF",
              borderTopColor: "#80daeb",
              borderTopWidth: 0.5,
            }}
          >
            <FontAwesome5 name="hand-holding-water" size={24} color="#17bbe8" />
            <Text
              style={{
                fontWeight: "bold",
                color: "#5cb85c",
                fontSize: 15,
              }}
            >
              WATER MANAGEMENT SYSTEM
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",

              marginTop: 20,
              paddingBottom: 5,
              borderBottomWidth: 1,
              borderBottomColor: "green",
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
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 65,
    backgroundColor: "#80daeb",
    flex: 1,
    borderBottomColor: "#5F9EA0",
    borderBottomWidth: 1,
  },
  tabwater: {
    backgroundColor: "skyblue",
    height: Dimensions.get("window").width / 25,
  },
});
