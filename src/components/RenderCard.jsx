import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
export default function RenderCard( {eventos} ) {

    return (
        <FlatList
        data={eventos}
        renderItem={({item}) =>(
            <Pressable style={styles.card} onPress={ () => {
                console.log('Modal: ',item)
            }}>
                <Text style={styles.title}>
                    {/* icone */}
                {item.evento}</Text>
                <View style={styles.info}>
                    <Text style={styles.text}>
                        {/*icone  */}
                    {item.data}</Text>
                    {/* icone */}
                    <Text style={styles.text}>
                    {item.organizador}</Text>
                </View>
            </Pressable>
        )}
        keyExtractor={item => item.id.toString()}
        />
    )

} 

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 3,
        padding: 10,
        marginBottom: 7,
        elevation: 3,
        backgroundColor: '#96e6fff6'
    },
    title:{
        color: '#000',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'ultralight'
    },
    info:{
        padding: 2,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: '#ffffff',
        fontStyle: 'italic',
        fontWeight: 'semibold',
        fontSize: 16

    }
    }
)