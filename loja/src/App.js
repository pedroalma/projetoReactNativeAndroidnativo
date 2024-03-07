import React from "react";
import {View} from "react-native";
import  Text  from "./components/terceiro";
import Parte, { Parte1,Parte2 } from "./components/Primeiro";

function App(){
    return(
    <View>
        <Parte/>
        <Parte1/>
        <Parte2/>  
        <Text/>
    </View>
    )
}

export default App;