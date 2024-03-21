import React from "react";
import { SafeAreaView,StyleSheet } from "react-native";

import Entrada from "./components/Entrada"
import estilo from "./components/estilo";
import Cliente from "./components/Cliente";


export default () =>{
    return(
        <SafeAreaView>
            {/* <Entrada/>*/}
            <Cliente/>
        </SafeAreaView>
    )
}


