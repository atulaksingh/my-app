import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../../Shared/Color";
import { useNavigation } from "@react-navigation/native";
const CourseData = [
  {
    id: "1",
    url: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1704955498/image_6_oqpiye.png",
    title: "Python",
    topic: "2",
  },
  {
    id: "2",
    url: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1704955500/image_7_wamsbo.png",
    title: "React",
    topic: "1",
  },
  {
    id: "3",
    url: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1704955498/image_6_oqpiye.png",
    title: "Node Js",
    topic: "3",
  },
];
export default function CourseList({ type }) {
  const navigation = useNavigation();
  const onPressCourse = (course) => {
    navigation.navigate("course-details");
  };
  return (
    <View style={{ marginTop: 10 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 3,
          textTransform: "capitalize",
        }}
      >
        {type} Course
      </Text>
      <FlatList
        data={CourseData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: Color.white,
              marginRight: 10,
              borderRadius: 10,
            }}
            onPress={() => onPressCourse()}
          >
            <Image
              source={{ uri: item.url }}
              style={{ width: 210, height: 120, borderRadius: 10 }}
            />
            <View style={{ padding: 9 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text style={{ color: Color.gray, fontWeight: "300" }}>
                {item.topic} Lessons
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
