import React, { useState } from "react";
import { Button, StyleSheet , View ,Text } from "react-native";


export default props => {
    const [num] = useState(props.numero)
    const [num2] = useState(props.numero2)
    const [resultado,setresultado] = useState(resultado)

    const  soma = () => {
        setresultado ( Math.sqrt( (num * num) + (num2 * num2) ) )
    }
    return (
        <View>
            <Text style={style.txtG}>Teorema De Pitagoras</Text>
            <Text style={style.txtH}>primeiro Cateto</Text>
            <Text style={style.txtG}>{num}</Text>
            <Text style={style.txtH}>segundo Cateto</Text>
            <Text style={style.txtG}>{num2}</Text>
            <Button title="soma" onPress={soma}/>
            <Text style={style.txtG}>hipotenusa</Text>
            <Text style={style.txtG}>{resultado}</Text>
            
        </View>
    )
}
const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 30,
            textAlign:"center",
        },
        txtH:{
            fontSize:24,
            textAlign:"center"
        }
    }
)