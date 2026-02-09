import { FlatList, StyleSheet, Text, View } from "react-native";
export default function RenderCard( {eventos} ) {

    return (
        <FlatList
        data={eventos}
        renderItem={({item}) =>(
            <View style={styles.container}>
                <Text>{item.evento}</Text>
                <View>
                    <Text>{item.data}</Text>
                    <Text>{item.organizador}</Text>
                </View>
                <Text>{item.descricao}</Text>
            </View>
        )}
        keyExtractor={item => item.id}
        />
    )

} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#fff'
    }
})