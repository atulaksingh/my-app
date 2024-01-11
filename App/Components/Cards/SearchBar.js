import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Color from "../../Shared/Color";
import { TextInput } from "react-native";
export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color={Color.gray} />
      <TextInput placeholder="Search Bar" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    gap:10,
    backgroundColor: "#fff",
    padding:10,
    borderRadius:10,
    elevation:2,
    marginTop:10
  },
});
