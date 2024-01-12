import { View, Text, FlatList, Image,  TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const VideoData = [
  {
    id: "1",
    url: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1704954705/Banner_Disney_1_n0tktc.png",
  },
  {
    id: "2",
    url: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1704954906/Hulu_Clone4_1_jnukdw.png",
  },
  {
    id: "3",
    url: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1704954705/Banner_Disney_1_n0tktc.png",
  },
];

export default function VideoCourseList() {
  const navigation = useNavigation();
  const onPressCourse = (course) => {
    navigation.navigate("course-details");
  };
  return (
    <View style={{marginTop:20}}>
    <Text style={{fontSize:20,fontWeight:"bold" ,marginBottom:3}}>Video Course</Text>
      <FlatList
        data={VideoData}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity  onPress={() => onPressCourse()}>
           <Image source={{uri: item.url}}
           style={{width:190,height:105,borderRadius:7,marginRight:10}}
           />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
