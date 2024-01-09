import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to  your app! hello jjDjgg  atul</Text>
      <StatusBar style="auto" />
      <Button title='Press' style={{ marginTop: 20 ,backgroundColor:"red"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
