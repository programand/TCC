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

                <Text style={estiloCad_cli.titulo}> Cadastre seus dados:</Text>     
               
               <View style={estiloCad_cli.area}>
                <View style={estiloCad_cli.formulario}>
                
                
            
             <TextInput type="text" name="name" placeholder="Nome*" /> <br/> <br/>

             <TextInput type="text" name="cidade" placeholder="Cidade*"/> <br/>   <br/>

               <TextInput type="tel" name="tel" placeholder="Telefone*"/> <br/><br/>

                <TextInput type="email" name="email" placeholder="E-mail*"/><br/><br/>    

                <TextInput type="password" name="senha" placeholder="Crie sua senha*"/><br/><br/>
               
          
            
            <TouchableOpacity onPress={Profissoes}>Cadastrar</TouchableOpacity>
               </View>
              </View>
                <TouchableOpacity onPress={voltar} style={estiloCad_cli.botaovoltar}>
                  <Text style={estiloCad_cli.txtbt}> voltar </Text>
                    </TouchableOpacity>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <View style={estiloCad_cli.rodape}/>


            </View>
        </View>
    )
}
export default Cad_cli;