import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import estiloContratar from  './estiloContratar';

const Contratar = () => {
  const [selectedValue, setSelectedValue] = useState(""); 
  return (
    <View style={estiloContratar.container}>
      <View style={estiloContratar.borda1}>
        <View style={estiloContratar.borda2}/>

        <br/>
        </View>
    </View>
  );
}

export default Contratar;