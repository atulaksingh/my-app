import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Login from "./App/pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./App/pages/Home";
import HomeNavigation from "./App/Navigation/HomeNavigation";
const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
  
    <NavigationContainer>
        <HomeNavigation/>
    </NavigationContainer>
    
    
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F6F8FC',

  },
});
