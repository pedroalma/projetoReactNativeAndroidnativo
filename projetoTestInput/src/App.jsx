import React from "react";
import { SafeAreaView,StyleSheet } from "react-native";

import EntradaTexto from "./components/EntradaTexto";

export default () =>{
    return (
        <SafeAreaView style={style.fundo}>
            <EntradaTexto/>
        </SafeAreaView>
    )
}
const style = StyleSheet.create(
    {
        fundo:{
            flexGrow:1,
            justifyContent:'center',
            alignItems:'center',
        }
    }
)