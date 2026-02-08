import { Image, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Header() {
    return(
    <View style={styles.container}>
        <Ionicons name="game-controller-outline" size={70} color="aqua" padding='20'/>

        <Text style={styles.h1}> GAME EVENT TRACKER</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: { 
    backgroundColor: '#0A0F1C',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center',
    borderColor: '#fff',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderRadius: 35
    },
    h1: {
        color:'#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    
    }
)