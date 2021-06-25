import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, } from 'react-native';
import estiloCad_Prof from './estiloCad_Prof';
import {Picker} from '@react-native-picker/picker';
// import {db} from '../../../config/config';
import { render } from 'react-dom';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from '../../../firebase';



 function Cad_Profissional  ({navigation}) {

  
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
