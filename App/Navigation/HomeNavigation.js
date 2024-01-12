import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import CourseDetails from '../pages/CourseDetails';
import Login from '../pages/Login';
import CourseChapter from '../pages/CourseChapter';
const Stack = createNativeStackNavigator();
export default function HomeNavigation() {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>

    <Stack.Screen name='login' component={Login}></Stack.Screen>
    <Stack.Screen name='home' component={Home}></Stack.Screen>
    <Stack.Screen name='course-details' component={CourseDetails}></Stack.Screen>
    <Stack.Screen name='course-chapter' component={CourseChapter}></Stack.Screen>
    
   </Stack.Navigator>
  )
}