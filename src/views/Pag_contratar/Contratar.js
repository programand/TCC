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
      <Picker style={estiloContratar.cxnome}
        selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="Cuidador(a)" value="Cuidador"/>
        <Picker.Item label="Faxineiro(a)" value="Faxineiro"/>
        <Picker.Item label="Manicure" value="Manicure"/>
        <Picker.Item label="Pedreiro" value="Pedreiro"/>
        <Picker.Item label="Pintor" value="Pintor"/>
      </Picker>
        </View>
    </View>
  );
}

export default Contratar;