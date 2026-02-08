import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Formulario from './src/components/Formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Formulario onAdicionar={FormData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F1B',
    padding: 20
  }
});
