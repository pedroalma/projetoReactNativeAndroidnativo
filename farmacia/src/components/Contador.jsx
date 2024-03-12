import React , {useState} from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Estilo from "./estilo";

export default props => {
    // let numero = props.inicial
    const [numero,setNumero] = useState(props.inicial)

    const inc = () => {
            setNumero(numero + 1)
        
    } 
    const dec = () => {
            setNumero (numero - 1 )
    }
    return(
        <View>
         <Image
         source={require('../img/foguetes.png')}
         style={
         {
            width: 150,
            height: 150,
         }
         }
         />
         <Text style={style.centro}>voa falcon 9</Text>
         <Text style={style.centro}>{numero}</Text>
         <Button title="adição" onPress={inc}/>
         <Button title="subtração" onPress={dec}/>
        </View>
    )
}
const style = StyleSheet.create(
    {
        centro:{
            textAlign:"center",
            fontSize: 26,
        }
    }
) 