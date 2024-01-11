import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Color from "../Shared/Color";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
  const navigation = useNavigation();

  const goToNextScreen = () => {
    // Navigate to the 'Next' screen
    navigation.navigate("Home");
  };
  return (
    <View>
      <Image source={require("../Assets/Images/login.png")} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome To CodeBox </Text>
        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 80 }}>
          Login/Signup
        </Text>
        {/* <View style={styles.button}>
          <AntDesign
            name="google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "#fff" }} >Sign With Google</Text>
          <Text style={{ color: "#fff" }} onPress={goToNextScreen}>Go to Home Page</Text>
        </View> */}
        <View style={styles.button}>
          <AntDesign
            name="google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "#fff" }} onPress={goToNextScreen}>Go to Home Page</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Color.primary,
    padding: 15,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
