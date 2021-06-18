import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, } from 'react-native';
import estiloCad_Prof from './estiloCad_Prof';
import {Picker} from '@react-native-picker/picker';
import {db} from '../../../config/config';
import { render } from 'react-dom';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from 'firebase';


 function Cad_Profissional  ({navigation}) {

    const voltar = () => {
        navigation.goBack('voltar'); 
    }

    const [nome, onChangeNome] = useState('');
    const [idade, onChangeIdade] = useState('');
    const [endereco, onChangeEndereco] = useState('');
    const [telefone, onChangeTelefone] = useState('');
    const [email, onChangeEmail] = useState('');
    const [senha, onChangeSenha] = useState('');
    const [profissao, setSelectedProfissao] = useState('');

    const salvar = event => { 
        alert(nome + ', ' + idade + ', ' + endereco + ', ' + telefone + ', ' + email + ', ' + senha + ', ' + profissao)
    }

return(
        <View style={estiloCad_Prof.container}>

          <View style={estiloCad_Prof.borda}>   
            <View style={estiloCad_Prof.borda2}/>   
                <Text style={estiloCad_Prof.titulo}> Preencha seus dados:</Text>   

                  <View style={estiloCad_Prof.area}>
                <View style={estiloCad_Prof.formulario}>
               {/* <div>
                   {nome.map((nome, index)) } (
                       <Nome
                       nome={nome}
                       index={nome['nome']}
                       
                   />)}
                   <Nome addNome={addNome}/>
               </div> */}
            <TextInput  placeholder='Nome:' style={estiloCad_Prof.cxnome} onChangeText={onChangeNome} value={nome} />

            <TextInput  placeholder='Idade:'keyboardType="numeric" style={estiloCad_Prof.cxnome} value={idade} onChangeText={onChangeIdade} />

            <TextInput placeholder='Endereço:' style={estiloCad_Prof.cxnome} value={endereco} onChangeText={onChangeEndereco} />

            <TextInput placeholder="Telefone"  keyboardType="phone-pad" style={estiloCad_Prof.cxnome} value={telefone} onChangeText={onChangeTelefone} />
            
            <TextInput placeholder='E-mail:' keyboardType="email-address" style={estiloCad_Prof.cxnome} value={email} onChangeEmail={onChangeEmail} />
            
            <TextInput placeholder="Senha:" secureTextEntry={true} style={estiloCad_Prof.cxnome} value={senha} onChangeText={onChangeSenha} /> 

             <Picker style={estiloCad_Prof.cxnome} selectedValue={profissao} onValueChange={(value, index) => setSelectedProfissao(value)} > 
                 <Picker.Item key={0} value="" label="Profissão"/>
                 <Picker.Item key={1} value="Cuidador(a)" label="Cuidador(a)"/>
                 <Picker.Item key={2} value="Faxineiro(a)" label="Faxineiro(a)"/>
                 <Picker.Item key={3} value="Manicure" label="Manicure"/>
                 <Picker.Item key={4} value="Pedreiro(a)" label="Pedreiro(a)"/>
                 <Picker.Item key={5} value="Pintor(a)" label="Pintor(a)"/>
             </Picker>
{/* 
                <TouchableHighlight >
                    <Text>Add</Text>
                </TouchableHighlight> */}

                <TouchableOpacity style={estiloCad_Prof.enviar} onPress={salvar}>
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
