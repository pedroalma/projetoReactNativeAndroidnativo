import React from "react";
import { StyleSheet, View } from "react-native";

import Contador from "./components/Contador";

export default () =>{
    return (
        <View style={style.fundo}>
            <Contador inicial = {111}/>
        </View>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign:  "center"
        }
    }
)