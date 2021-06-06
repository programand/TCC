import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, } from 'react-native';
import estiloCad_Prof from './estiloCad_Prof';
import {Picker} from '@react-native-picker/picker';
import {db} from '../../../config/config';
import { render } from 'react-dom';
import { TouchableHighlight } from 'react-native-gesture-handler';

function Cad_Profissional  ({navigation}) {

    const voltar = () => {
        navigation.goBack('voltar'); 
    }
class Cad_Profissinal extends React.Component{
    State = {
        Nome: ''
    }; 

    SalvaNome = () =>{
        db.collection('/profissionais').add({
            Nome: this.state.Nome
        }).then(()=>{
            Alert.alert('Cadastro enviado');
        })
    };
}
    render()
return(
        <View style={estiloCad_Prof.container}>

          <View style={estiloCad_Prof.borda}>   
            <View style={estiloCad_Prof.borda2}/>   
                <Text style={estiloCad_Prof.titulo}> Preencha seus dados:</Text>   

                  <View style={estiloCad_Prof.area}>
                <View style={estiloCad_Prof.formulario}>
               
            <TextInput  placeholder='Nome:' style={estiloCad_Prof.cxnome} onChangeText={Nome => {this.setState({Nome})}} />

            <TextInput  placeholder='Idade:'keyboardType="numeric" style={estiloCad_Prof.cxnome}/>

            <TextInput placeholder='Endereço:' style={estiloCad_Prof.cxnome} />

            <TextInput placeholder="Telefone"  keyboardType="phone-pad" style={estiloCad_Prof.cxnome} />
            
            <TextInput placeholder='E-mail:' keyboardType="email-address" style={estiloCad_Prof.cxnome} />
            
            <TextInput placeholder="Senha:" secureTextEntry={true} style={estiloCad_Prof.cxnome} /> 

             <Picker style={estiloCad_Prof.cxnome} > 
                 <Picker.Item key={0} value="" label="Profissão"/>
                 <Picker.Item key={1} value="Cuidador(a)" label="Cuidador(a)"/>
                 <Picker.Item key={2} value="Faxineiro(a)" label="Faxineiro(a)"/>
                 <Picker.Item key={3} value="Manicure" label="Manicure"/>
                 <Picker.Item key={4} value="Pedreiro(a)" label="Pedreiro(a)"/>
                 <Picker.Item key={5} value="Pintor(a)" label="Pintor(a)"/>
             </Picker>

                <TouchableHighlight onPress={this.SalvaNome}>
                    <Text>Add</Text>
                </TouchableHighlight>

                <TouchableOpacity style={estiloCad_Prof.enviar} >
                <Text style={estiloCad_Prof.txtbt}>Cadastrar</Text>
                </TouchableOpacity>
               
            </View>
            </View>
                  
             
            <TouchableOpacity style={estiloCad_Prof.botaovoltar} onPress={voltar}>
                <Text style={estiloCad_Prof.txtbt}>Voltar</Text>
                </TouchableOpacity>
           

            <View style={estiloCad_Prof.rodape}/>


             </View>
        </View>
    )
}

export default Cad_Profissional;
