import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './src/views/Pag_Inicial/Inicial';
import Login from './src/views/Pag_Login/Cadastro';
import Cad_Profissional from './src/views/Pag_Login/Cad_Profissional';
import Cad_Cli from './src/views/Pag_Login/Cad_Cli';
import Entra from './src/views/Pag_Login/Entra';
import Contratar from './src/views/Pag_contratar/Contratar';

const Stack =  createStackNavigator();

export default function App() {
  return (
       <NavigationContainer>
          <Stack.Navigator>
          {/* <Stack.Screen name="Inicial" component={Inicial}/>     */}
          <Stack.Screen name="Contratar" component={Contratar}/>
           {/* <Stack.Screen name="Login" component={Login}/>
           <Stack.Screen name="Cad_Profissional" component={Cad_Profissional}/>
            <Stack.Screen name="Cad_Cli" component={Cad_Cli}/>
            <Stack.Screen name="Entra" component={Entra}/> */}
         </Stack.Navigator>  
              
    //   </NavigationContainer>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});