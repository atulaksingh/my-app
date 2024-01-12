import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../Shared/Color";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
  const navigation = useNavigation();

  const goToNextScreen = () => {
    // Navigate to the 'Next' screen
    navigation.navigate("home");
  };
  return (
    <View>
      <Image source={require("../Assets/Images/login.png")} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome To CodeBox </Text>
        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 80 }}>
          Login/Signup
        </Text>
     
        <TouchableOpacity style={styles.button} onPress={goToNextScreen}>
          <AntDesign
            name="google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "#fff" }} >Go to Home Page</Text>
        </TouchableOpacity>
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
