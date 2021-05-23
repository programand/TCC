import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import estiloCad_Prof from './estiloCad_Prof';
//import Picker from 'react-native';

function Cad_Prof({navigation}) {
    const voltar = () => {
        navigation.goBack('voltar');
    }

return(
        <View style={estiloCad_Prof.container}>

            <View style={estiloCad_Prof.borda}>   
            <View style={estiloCad_Prof.borda2}/>   

                <Text style={estiloCad_Prof.titulo}> Preencha seus dados:</Text>   

                  <View style={estiloCad_Prof.area}>
                <View style={estiloCad_Prof.formulario}>
                
               
              
            <TextInput
            placeholder='Nome:'
            />

            <TextInput
            placeholder='Idade:'
            keyboardType="numeric"

            />

            <TextInput
            placeholder='Endereço:'
             />


            <TextInput
            placeholder="Telefone"  
            keyboardType="phone-pad"
            />


            <TextInput
            placeholder='E-mail:'
            keyboardType="email-address"/>
            
            

   <TextInput placeholder="Senha:" secureTextEntry={true}/> 

                   {/* <Picker
                        selectedValue={this.state.language}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue) => this.setState({ language: itemValue })}>
                        <Picker.Item label="teste2" value="teste" />
                        <Picker.Item label="teste1" value="teste1" />
                    </Picker>     */}

            </View>
            </View>

           

                <br/>
            <TouchableOpacity style={estiloCad_Prof.botaovoltar} onPress={voltar}>
                <Text style={estiloCad_Prof.txtbt}>Voltar</Text>
                </TouchableOpacity>
           

            <View style={estiloCad_Prof.rodape}/>


            </View>
        </View>
    )
}
export default Cad_Prof;
