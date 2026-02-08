import { useState } from "react"
import { TouchableOpacity, Alert, Text, TextInput, View, StyleSheet } from "react-native"

export default function Formulario( { onAdicionar }) {

    const [formData, setFormData] = useState({
            evento: '',
            data: '',
            organizador: '',
            descricao: ''
        })


    const [erro, setErro] = useState(false)

    const handleCadastrar = () => {
            const campoVazio = Object.values(formData).some( (value) =>
                value.trim() == ""
        )   
           

            if (campoVazio){
                Alert.alert('Vazio', "Preencha todos os campos!")
            } else {
                Alert.alert('Concluido', "Evento cadastro com sucesso!")
                // onAdicionar(formData)
        }
        return
        }
    const inputChange = (campo, valor) => {
            setFormData({
                ...formData,[campo]: valor
            })
    }

    
    return(
        <View style={styles.container}>
            <TextInput
            label="Nome do Evento"
            placeholder="Ex: Torneio Valorant"
            value={formData.evento}
            onChangeText={(text) => inputChange('evento', text)}
            style={styles.input}
            />

            <TextInput
            label="Data"
            placeholder="00/00/0000"
            value={formData.data}
            onChangeText={(text) => inputChange('data', text)}
            style={styles.input}
            />


            <TextInput
            label="Organizador"
            placeholder="ex: Clã Alpha"
            value={formData.organizador}
            onChangeText={(text) => inputChange('organizador', text)}
            style={styles.input}
            />

            <TextInput 
            label="Organizador"
            placeholder="ex: Competição 5v5 no mapa Bind."
            value={formData.descricao}
            onChangeText={(text) => inputChange('descricao', text)}
            style={styles.input}
            />

            <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
        <Text style={styles.textoBotao}>Salvar Evento</Text>
      </TouchableOpacity>

        </View>
            )

    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#111629f8'
    },
    input: {
        backgroundColor: '#fff',
        padding: 5
    }
})