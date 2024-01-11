import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function WelcomeHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello,</Text>
        <Text style={{fontSize:20,fontWeight:"bold"}}>Atuls</Text>
      </View>
      <Image source={require('../../Assets/Images/MaleUser.png')} style={{height:50,width:50,borderRadius:100}}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})