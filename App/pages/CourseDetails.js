import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Color from "../Shared/Color";
import CourseContent from "../Components/Cards/CourseContent";
import { useNavigation } from "@react-navigation/native";
export default function CourseDetails() {
  const navigation = useNavigation()
  return (
    <View style={{padding:20,paddingTop:30}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>

      <Ionicons name="arrow-back-sharp" size={28} color="black" />
      </TouchableOpacity>
      <View>
        <Text style={{fontSize:20,fontWeight:"bold"}}>Python Basics</Text>
        <Text style={{color:Color.gray}}>By Atul</Text>
        <Image source={require('../Assets/Images/courseImg.png')} style={{height:150,marginTop:10,borderRadius:10,}}/>
        <Text style={{marginTop:10,fontWeight:"bold",fontSize:16}}>About Course</Text>
        <Text numberOfLines={3} style={{color:Color.gray}}>Python is a general-purpose, high-level programming language. Its design philosophy emphasizes code readability with its notable use of significant whitespace. </Text>
      
      </View>
      <CourseContent />
    </View>
  );
}
