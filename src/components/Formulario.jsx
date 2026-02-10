import { useState } from "react"
import { TouchableOpacity, Alert, Text, TextInput, View, StyleSheet } from "react-native"
import MaskInput from "react-native-mask-input"
export default function Formulario( { onAdicionar }) {

    const formInicial = {
            evento: '',
            data: '',
            organizador: '',
            descricao: ''
        }

    const [formData, setFormData] = useState(formInicial)

    const handleCadastrar = () => {
            const campoVazio = Object.values(formData).some( (value) =>
                value.trim() == ""
        )   
           

            if (campoVazio){
                Alert.alert('Vazio', "Preencha todos os campos!")
            } else {
                Alert.alert('Concluido', "Evento cadastro com sucesso!")
                onAdicionar(formData)
                
                setFormData(formInicial)
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
            <View style={styles.formContainer}>
                <Text style={styles.title}>Nome do evento:</Text>
                <TextInput
                placeholder="Ex: Torneio Valorant"
                value={formData.evento}
                onChangeText={(text) => inputChange('evento', text)}
                style={styles.input}
                autoCapitalize="words"
                />
            </View>
            <View style={styles.formContainerCenter}>
                <Text style={styles.title}>Data do evento:</Text>
                <MaskInput
                placeholder="00/00/0000"
                value={formData.data}
                onChangeText={(masked) => inputChange('data', masked)}
                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                style={styles.input}
                keyboardType="numeric"
            />
            </View>

            <View style={styles.formContainerCenter}>
                <Text style={styles.title}>Organizador:</Text>
                <TextInput
                placeholder="ex: Clã Alpha"
                value={formData.organizador}
                onChangeText={(text) => inputChange('organizador', text)}
                style={styles.input}
                />
            </View>
            <View style={styles.formContainerDesc}>
                <Text style={styles.title}>Descrição</Text>
                <TextInput 
                placeholder="ex: Competição 5v5 no mapa Bind."
                value={formData.descricao}
                onChangeText={(text) => inputChange('descricao', text)}
                style={styles.input}
            />
            </View>

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
        backgroundColor: '#fffffff8',
        width: '100%'
    },
  

})