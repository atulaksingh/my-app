import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";
export default function CourseContent() {
    const navigation = useNavigation();
    const onPressCourse = (course) => {
      navigation.navigate("course-chapter");
    };
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>CourseContent</Text>
      {/* <FlatList data={courseData}
      renderItem={({item})=>(

      )}
      /> */}
      <View style={{marginTop:10}}>
        <TouchableOpacity onPress={()=>onPressCourse()} style={{ display: "flex", flexDirection: "row",backgroundColor:Color.white,padding:13,marginBottom:5, alignContent:"center", alignItems:"center",borderRadius:5 }}>
          <Text style={{fontWeight:"bold",fontSize:20, color:Color.gray,marginRight:20}}> 01</Text>
          <Text style={{fontSize:15,fontWeight:"bold"}}>Introduction</Text>
          <Foundation name="play-circle" size={24} color={Color.primary} style={{position:"absolute",right:0,marginRight:10}} />
        </TouchableOpacity>
        <View style={{ display: "flex", flexDirection: "row",backgroundColor:Color.white,padding:13,marginBottom:5, alignContent:"center", alignItems:"center",borderRadius:5 }}>
          <Text style={{fontWeight:"bold",fontSize:20, color:Color.gray,marginRight:20}}> 01</Text>
          <Text style={{fontSize:15,fontWeight:"bold"}}>Introduction</Text>
          <Foundation name="play-circle" size={24} color={Color.primary} style={{position:"absolute",right:0,marginRight:10}} />
        </View>
        <View style={{ display: "flex", flexDirection: "row",backgroundColor:Color.white,padding:13,marginBottom:5, alignContent:"center", alignItems:"center",borderRadius:5 }}>
          <Text style={{fontWeight:"bold",fontSize:20, color:Color.gray,marginRight:20}}> 01</Text>
          <Text style={{fontSize:15,fontWeight:"bold"}}>Introduction</Text>
          <Foundation name="play-circle" size={24} color={Color.primary} style={{position:"absolute",right:0,marginRight:10}} />
        </View>
        <View style={{ display: "flex", flexDirection: "row",backgroundColor:Color.white,padding:13,marginBottom:5, alignContent:"center", alignItems:"center",borderRadius:5 }}>
          <Text style={{fontWeight:"bold",fontSize:20, color:Color.gray,marginRight:20}}> 01</Text>
          <Text style={{fontSize:15,fontWeight:"bold"}}>Introduction</Text>
          <Foundation name="play-circle" size={24} color={Color.primary} style={{position:"absolute",right:0,marginRight:10}} />
        </View>
        <View style={{ display: "flex", flexDirection: "row",backgroundColor:Color.white,padding:13,marginBottom:5, alignContent:"center", alignItems:"center",borderRadius:5 }}>
          <Text style={{fontWeight:"bold",fontSize:20, color:Color.gray,marginRight:20}}> 01</Text>
          <Text style={{fontSize:15,fontWeight:"bold"}}>Introduction</Text>
          <Foundation name="play-circle" size={24} color={Color.primary} style={{position:"absolute",right:0,marginRight:10}} />
        </View>
        <View style={{ display: "flex", flexDirection: "row",backgroundColor:Color.white,padding:13,marginBottom:5, alignContent:"center", alignItems:"center",borderRadius:5 }}>
          <Text style={{fontWeight:"bold",fontSize:20, color:Color.gray,marginRight:20}}> 01</Text>
          <Text style={{fontSize:15,fontWeight:"bold"}}>Introduction</Text>
          <Foundation name="play-circle" size={24} color={Color.primary} style={{position:"absolute",right:0,marginRight:10}} />
        </View>
       
      </View>
    </View>
  );
}
