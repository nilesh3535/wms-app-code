import React, { Component, useState } from "react";
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
  Linking,
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
  SimpleLineIcons,
} from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

const MyProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [bname, setBname] = useState("");
  const [society, setSociety] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [mobno, setMobno] = useState("");
  const [email, setEmail] = useState("");
  const [tankcap, setTankCap] = useState("");
  const [btankcap, setBTankCap] = useState("");
  SecureStore.getItemAsync("tankcap").then((value) => {
    setTankCap(value);
  });
  SecureStore.getItemAsync("btankcap").then((value) => {
    setBTankCap(value);
  });
  SecureStore.getItemAsync("name").then((value) => {
    setName(value);
  });
  SecureStore.getItemAsync("bname").then((value) => {
    setBname(value);
  });
  SecureStore.getItemAsync("society").then((value) => {
    setSociety(value);
  });
  SecureStore.getItemAsync("area").then((value) => {
    setArea(value);
  });
  SecureStore.getItemAsync("city").then((value) => {
    setCity(value);
  });
  SecureStore.getItemAsync("pin").then((value) => {
    setPin(value);
  });
  SecureStore.getItemAsync("mobno").then((value) => {
    setMobno(value);
  });
  SecureStore.getItemAsync("email").then((value) => {
    setEmail(value);
  });

  const onLogout = () => {
    ToastAndroid.show("Logout successfully!", ToastAndroid.SHORT);
    SecureStore.setItemAsync("login", "false");
    navigation.navigate("Login");
  };
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              name="user-circle-o"
              color="gray"
              size={24}
              style={{
                margin: 2,

                borderRadius: 50,
              }}
            />
            <Text style={{ color: "#80daeb", fontWeight: "bold", margin: 2 }}>
              {name}
            </Text>
          </View>
          <View style={{ padding: 15, width: 210 }}></View>
        </View>
        <View
          style={{
            backgroundColor: "#FFF",
            padding: 20,
            marginTop: 10,
            borderRadius: 4,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#66CDAA", fontWeight: "bold" }}>Name</Text>
            <Text style={{ color: "skyblue", fontWeight: "bold" }}>{name}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#66CDAA", fontWeight: "bold" }}>Mobile</Text>
            <Text
              style={{ color: "skyblue", marginTop: 5, fontWeight: "bold" }}
            >
              {mobno}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#66CDAA", fontWeight: "bold" }}>Email</Text>
            <Text
              style={{ color: "skyblue", marginTop: 5, fontWeight: "bold" }}
            >
              {email}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#66CDAA", fontWeight: "bold" }}>
              Building Name
            </Text>
            <Text style={{ color: "#f0ad4e", fontWeight: "bold" }}>
              {bname}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#66CDAA", fontWeight: "bold" }}>
              Society
            </Text>
            <Text style={{ color: "#f0ad4e", fontWeight: "bold" }}>
              {society}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#66CDAA", fontWeight: "bold" }}>City</Text>
            <Text style={{ color: "#f0ad4e", fontWeight: "bold" }}>{city}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#66CDAA", fontWeight: "bold" }}>Pin</Text>
            <Text style={{ color: "#f0ad4e", fontWeight: "bold" }}>{pin}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#66CDAA", fontWeight: "bold" }}>
              Overhead WaterTank Capacity
            </Text>
            <Text style={{ color: "skyblue", fontWeight: "bold" }}>
              {tankcap} Litre
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "#66CDAA", fontWeight: "bold" }}>
              Basement WaterTank Capacity
            </Text>
            <Text style={{ color: "skyblue", fontWeight: "bold" }}>
              {btankcap} Litre
            </Text>
          </View>
        </View>
      </View>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://whizkey.org")}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: 17,
              paddingBottom: 17,
              paddingLeft: 20,
              borderBottomColor: "#DCDCDC",
              borderBottomWidth: 1,
            }}
          >
            <AntDesign name="customerservice" size={24} color="#787878" />

            <Text
              style={{
                color: "#787878",
                marginLeft: 10,
                fontSize: 15,
              }}
            >
              Contact Us
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onLogout();
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: 17,
              paddingBottom: 17,
              paddingLeft: 20,
              borderBottomColor: "#DCDCDC",
              borderBottomWidth: 1,
            }}
          >
            <AntDesign name="logout" size={22} color="#787878" />

            <Text
              style={{
                color: "#787878",
                marginLeft: 10,
                fontSize: 15,
              }}
            >
              Logout
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 50,
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
            marginTop: 25,
            paddingBottom: 15,
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
          <Text style={{ fontSize: 15, color: "#5cb85c", fontWeight: "bold" }}>
            Whizkey (OPC) Pvt Ltd
          </Text>
          <Text>All Rights Reserved!</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyProfile;
