import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Estilo from "./components/estilo";
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Testo from "./components/Testo";



export default ()=>{
    return(
        <View style={Estilo.fundo}>
           <Testo/>
           <Aleatorio min={1} max ={60}/>
           <Aleatorio min={1} max ={60}/>
           <Aleatorio min={1} max ={60}/>
           <Aleatorio min={1} max ={60}/>
           <Aleatorio min={1} max ={60}/>
           <Aleatorio min={1} max ={60}/>

        </View>
    )
}
