import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Estilo from "./estilo";

export default ()=>{
    return(
        <Text style={style.textO}>Numeros da mega</Text>
      
    )
}

const style = StyleSheet.create(
    {
        textO:{
            fontSize: 40,
            color: '#B0E0E6'
        }
    }
)
