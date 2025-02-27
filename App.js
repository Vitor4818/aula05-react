import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProfileCard from './profileCard';


export default function App() {
  return (
    <View style={styles.container}>
<ProfileCard nome = "Vitor" idade = "19" job = "Developer"/>
            <StatusBar style="auto" />
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
