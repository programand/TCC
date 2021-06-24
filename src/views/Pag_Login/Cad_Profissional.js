import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, } from 'react-native';
import estiloCad_Prof from './estiloCad_Prof';
import {Picker} from '@react-native-picker/picker';
import {db} from '../../../config/config';
import { render } from 'react-dom';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from 'firebase';



 function Cad_Profissional  ({navigation, route}) {

    const db = firebase.firestore()
    const {user, userData} = route.params

    const voltar = () => {
        navigation.goBack('voltar'); 
    }

    
    const [nome, onChangeNome] = useState(user.displayName)
    const [idade, onChangeIdade] = useState('')
    const [endereco, onChangeEndereco] = useState('')
    const [telefone, onChangeTelefone] = useState('')
    const [email, onChangeEmail] = useState('')
    //const [senha, onChangeSenha] = useState('')
    const [profissao, setSelectedProfissao] = useState('')


    const handleSave = () => {
        const newUserData = {
            'nome' : nome,
            'endereco' : endereco,
            'idade' : idade,
            'telefone' : telefone,
            'email' : email,
            'profissao' : profissao,
            'uid' : user.uid
        }
        db.collection('profissionais').add(newUserData)
        navigation.navigate('Contratar', {userData : newUserData})
    }
    async function loginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      const db = firebase.firestore()

      const result = await firebase.auth().signInWithPopup(provider)
      if(result){
        let userData = null
        db.collection('profissionais').where('uid', '==', result.user.uid).get().then((querySnapshot) => {
          if(querySnapshot.size == 1){
            userData = querySnapshot.docs[0].data()
            navigation.navigate('Contratar', {userData: userData})
          } else {
            navigation.navigate('Cadastro', {user: result.user, userData: userData})
          }
        })
      }
    }

return(
        <View style={estiloCad_Prof.container}>

          <View style={estiloCad_Prof.borda}>   
            <View style={estiloCad_Prof.borda2}/>   
                <Text style={estiloCad_Prof.titulo}> Preencha seus dados:</Text>   

                  <View style={estiloCad_Prof.area}>
                <View style={estiloCad_Prof.formulario}>
            
            <TextInput  placeholder='Nome:' style={estiloCad_Prof.cxnome} onChangeText={onChangeNome} value={nome} />

            <TextInput  placeholder='Idade:'keyboardType="numeric" style={estiloCad_Prof.cxnome} value={idade} onChangeText={onChangeIdade} />

            <TextInput placeholder='Endereço:' style={estiloCad_Prof.cxnome} value={endereco} onChangeText={onChangeEndereco} />

            <TextInput placeholder="Telefone"  keyboardType="phone-pad" style={estiloCad_Prof.cxnome} value={telefone} onChangeText={onChangeTelefone} />
            
            <TextInput placeholder='E-mail:' keyboardType="email-address" style={estiloCad_Prof.cxnome} value={email} onChangeEmail={onChangeEmail} />
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title='Login com Google' onPress={loginGoogle} />
          </View>
            {/* <TextInput placeholder="Senha:" secureTextEntry={true} style={estiloCad_Prof.cxnome} value={senha} onChangeText={onChangeSenha} />  */}

             <Picker style={estiloCad_Prof.cxnome} selectedValue={profissao} onValueChange={(value, index) => setSelectedProfissao(value)} > 
                 <Picker.Item key={0} value="" label="Profissão"/>
                 <Picker.Item key={1} value="Cuidador(a)" label="Cuidador(a)"/>
                 <Picker.Item key={2} value="Faxineiro(a)" label="Faxineiro(a)"/>
                 <Picker.Item key={3} value="Manicure" label="Manicure"/>
                 <Picker.Item key={4} value="Pedreiro(a)" label="Pedreiro(a)"/>
                 <Picker.Item key={5} value="Pintor(a)" label="Pintor(a)"/>
             </Picker>


                <TouchableOpacity style={estiloCad_Prof.enviar} onPress={handleSave}>
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
