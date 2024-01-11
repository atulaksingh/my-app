import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Login from "./App/pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./App/pages/Home";
const Stack = createStackNavigator();
export default function App() {
  return (
    // <View >
    //  <Login />
    // </View>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Home} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
  },
});
