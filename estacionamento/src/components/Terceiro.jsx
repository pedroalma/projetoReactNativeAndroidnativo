import React from "react";
import { View,Text,StyleSheet} from "react-native";
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
            backgroundColor: '#00FF7F',
            flex:1,
            padding:30,
        }
    }
)