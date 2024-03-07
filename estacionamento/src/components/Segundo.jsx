import React from "react";
import { View,Text,StyleSheet } from "react-native";
import estilo from "./estilo";


export default ()=>{
    return (
        <View style={estiloPri.fundopri}>
            <Text style={estilo.fondo}>Primeiro componente!!!</Text>
        </View>
    )
}

const estiloPri = StyleSheet.create(
    {
        fundopri:{
            backgroundColor: '#8B0000',
            flex:1,
            padding:30,
        }
    }
)