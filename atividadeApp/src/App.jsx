import React from "react";
import { SafeAreaView,StyleSheet } from "react-native";

import Entrada from "./components/Entrada"
import estilo from "./components/estilo";


export default () =>{
    return(
        <SafeAreaView style={estilo.fundo}>
            <Entrada  />            
        </SafeAreaView>
    )
}


