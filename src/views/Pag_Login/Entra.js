import React from 'react';
import { Text, View, TouchableOpacity,} from 'react-native';
import estiloEntrar from './estiloEntrar';

function Entra() {
return(
        <View style={estiloEntrar.container}>

            <View style={estiloEntrar.borda}>   
            <View style={estiloEntrar.borda2}/>   

                <Text style={estiloEntrar.titulo}> Faça seu Login</Text>     

                  <View style={estiloEntrar.area}>
                <View style={estiloEntrar.formulario}>
                

                <form>
            <label>
                <input type="email" name="email" placeholder="E-mail"/><br/> <br/>
                <input type="password" name="senha" placeholder="Insira sua senha:"/> <br/><br/>
               
             </label>
            
            <input type="submit" value="Entrar"/>
            </form>  
              </View>
              </View>
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