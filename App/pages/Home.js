import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import WelcomeHeader from '../Components/Cards/WelcomeHeader'
import SearchBar from '../Components/Cards/SearchBar'
import Slider from '../Components/Cards/Slider'
import VideoCourseList from '../Components/Cards/VideoCourseList'
import CourseList from '../Components/Cards/CourseList'

const Home = () => {
  return (
    <ScrollView style={{padding:20}}>
     <WelcomeHeader />
     <SearchBar />
     <Slider />
     <VideoCourseList />
     <CourseList  type={"Basic"}/>
     <CourseList type={"Basic"} />
    </ScrollView>
  )
}

export default Home