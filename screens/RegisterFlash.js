import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  BackHandler,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const RegisterFlash = ({ navigation }) => {
  const [align, setAlign] = useState("center");
  const [alignsecond, setAlignsecond] = useState(false);

  setTimeout(() => {
    setAlign("flex-start"), setAlignsecond(true);
  }, 3000);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Register");
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={[styles.container, { justifyContent: align }]}>
      {!alignsecond && (
        <Image
          source={require("../assets/registerflash.gif")}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        />
      )}
      {!alignsecond ? null : (
        <View style={{ margin: 10 }}>
          <Text
            style={{
              color: "#114998",
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Registeration Successfully...!
          </Text>
          <TouchableOpacity
            style={{
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 4,
              elevation: 3,
              backgroundColor: "#80daeb",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 21,
                fontWeight: "bold",
                letterSpacing: 1,
                color: "white",
              }}
            >
              Go to WMS Login
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
      )}
    </View>
  );
};

export default RegisterFlash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Dimensions.get("window").height / 3,
    backgroundColor: "#fff",
  },
});
