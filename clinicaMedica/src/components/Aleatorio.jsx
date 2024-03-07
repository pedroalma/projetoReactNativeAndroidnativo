import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Estilo from "./estilo";

export default props =>{
    const delta = props.max - props.min + 1
    const aleatorio = parseInt (Math.random() * delta + props.min)
    console.warn(aleatorio);
    return(
        <View>
            <Text style={style.txtG}>
                {aleatorio}                
            </Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            textAlign:"center",
            fontSize:30,
        }
    }
)