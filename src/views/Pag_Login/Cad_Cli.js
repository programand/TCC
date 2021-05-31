import React from 'react';
import { Text, View, TouchableOpacity,TextInput} from 'react-native';
import estiloCad_cli from './estiloCad_cli';

function Cad_cli({navigation}) {
    const voltar = () => {
        navigation.goBack('voltar');
    }
    const Profissoes = () => {
        navigation.navigate('Profissoes');
    }
return(
        <View style={estiloCad_cli.container}>

            <View style={estiloCad_cli.borda}>   
            <View style={estiloCad_cli.borda2}/>   

                <Text style={estiloCad_cli.titulo}> Preencha seus dados:</Text>     
               
               <View style={estiloCad_cli.area}>
                <View style={estiloCad_cli.formulario}>
                
                
            
             <TextInput type="text" name="name" placeholder="Nome*" style={estiloCad_cli.cxnome} /> 

             <TextInput type="text" name="cidade" placeholder="Cidade*" style={estiloCad_cli.cxnome}/> 

               <TextInput type="tel" name="tel" placeholder="Telefone*" style={estiloCad_cli.cxnome}/> 

                <TextInput type="email" name="email" placeholder="E-mail*" style={estiloCad_cli.cxnome}/> 

                  <TextInput placeholder="Senha:" secureTextEntry={true} style={estiloCad_cli.cxnome} /> 
               
          <br/>
            
           <TouchableOpacity onPress={Profissoes} style={estiloCad_cli.enviar}>
            <Text style={estiloCad_cli.txtbt}>Cadastrar</Text>
            </TouchableOpacity>
               <br/>
              
               </View>
              </View>
                <TouchableOpacity onPress={voltar} style={estiloCad_cli.botaovoltar}>
                  <Text style={estiloCad_cli.txtbt}> voltar </Text>
                    </TouchableOpacity>
            <br/>
            <br/>
            <br/>
            
            <View style={estiloCad_cli.rodape}/>


            </View>
        </View>
    )
}
export default Cad_cli;