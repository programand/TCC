import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial( {navigation}){
    const Login = () => {
        navigation.navigate('Login')
    }
    return(
        <View style={estiloInicial.container}>

            <View style={estiloInicial.borda}>

                 <Image style={estiloInicial.img} source={require('../../assets/img/splash.png')}/> 


                <TouchableOpacity onPress={Login} style={estiloInicial.botaoLogin}>

                     <Text style={estiloInicial.txtbtlogin}>Navegar</Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Inicial;