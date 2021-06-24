import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import estiloContratar from  './estiloContratar';

const Contratar = () => {
  const [selectedValue, setSelectedValue] = useState(""); 

     const {userData} = route.params
  return (
    <View style={estiloContratar.container}>
      <View style={estiloContratar.borda1}>
        <View style={estiloContratar.borda2}/>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Início : {userData.nome}</Text>
      </View>
    
        <br/>
        </View>
    </View>
  );
}

export default Contratar;