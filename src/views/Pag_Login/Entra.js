import React from 'react';
import { Text, View, TouchableOpacity,TextInput, Image} from 'react-native';
import estiloEntrar from './estiloEntrar';

function Entra() {
return(
        <View style={estiloEntrar.container}>

            <View style={estiloEntrar.borda}>   
            <View style={estiloEntrar.borda2}/>   

                <Text style={estiloEntrar.titulo}> Faça seu Login</Text>     

                     <Image  source={require('../../assets/img/logo.png')}/>   

                  <View style={estiloEntrar.area}>
                <View style={estiloEntrar.formulario}>
            <br/>
            <br/>
                
                 <TextInput placeholder='E-mail:' keyboardType="email-address" style={estiloEntrar.cxnome} />
               <br/>
            
            <TextInput placeholder='Senha' type="Senha:" secureTextEntry={true} style={estiloEntrar.cxnome} /> 

                  <TouchableOpacity style={estiloEntrar.enviar} >
                <Text style={estiloEntrar.txtbt}>Cadastrar</Text>
                </TouchableOpacity>
            
              </View>
              </View>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

         
            <View style={estiloEntrar.rodape}/>


            </View>
        </View>
    )
}
export default Entra;