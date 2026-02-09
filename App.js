import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Formulario from './src/components/Formulario';
import { useState } from 'react';
import RenderCard from './src/components/RenderCard';

export default function App() {

  const [listaEventos, setListaEventos] = useState([])
  const [contador, setContador] = useState(1)

  const save = (data) => {
    setListaEventos( prevLista => [
      ...prevLista, {id: contador, ...data}
    ])
    setContador(prev => prev + 1)
  }
  return (
    <View style={styles.container}>
      <Header/>
      <Formulario onAdicionar={save}/>
      <RenderCard eventos={listaEventos}/>
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
