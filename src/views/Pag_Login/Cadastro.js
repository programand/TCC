 import React from 'react';
 import { Text, View, TouchableOpacity, Image } from 'react-native';
 import estiloCad from './estiloCad';
 import Cad_Cli from './Cad_Cli';
 import Cad_Profissional from './Cad_Profissional';


 function  Login( {navigation}){
      const Cad_Profissional = () => {
         navigation.navigate('Cad_Profissional')
      }
     const Cad_Cli = () => {
         navigation.navigate('Cad_Cli')
     }
     const Entra = () => {
         navigation.navigate('Entra')
     }
     return(
         <View style={estiloCad.container}>

                <View style={estiloCad.borda1}>
                    <View style={estiloCad.borda2}/>

                 <Text style={estiloCad.txtBV}>Bem Vindo!</Text>
                  {/* <Image style={estiloPagina1.img} source={require('../../assets/logo.png')}/> */}
                 <Text style={estiloCad.txtCad}>Cadastre - Se</Text>

            
                 <TouchableOpacity onPress={Cad_Profissional} style={estiloCad.botaoCad}>
                     <Text style={estiloCad.txtbtCad}>Profissional</Text>
                 </TouchableOpacity>

                      <TouchableOpacity onPress={Cad_Cli} style={estiloCad.botaoCad}>
                     <Text  style={estiloCad.txtbtCad}>Cliente</Text>
                 </TouchableOpacity>
                 <br></br>
                <Text style={estiloCad.pergunta}>Já é cadastrado? Faça o</Text>
                
                 <TouchableOpacity onPress={Entra} style={estiloCad.botaoEntrar}>                   
                     <Text style={estiloCad.botaotxtEntrar}>Login</Text>
                 </TouchableOpacity>
                 <View style={estiloCad.rodape}/>

             </View>
            
</View>
     )
 }


 export default Login;