import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Estilo from "./estilo";


export default (props)=>{
    console.warn(props)
    return(
        <View style={Estilo.fundo}>
            <Text style={style.textG}>o numero {props.maior} é maior que o numero {props.menor}</Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        textG:{
            fontSize: 30,
            color:'#B0E0E6',
            textAlign:'center'
        }
    }
)