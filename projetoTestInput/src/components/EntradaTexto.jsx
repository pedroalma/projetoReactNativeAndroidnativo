import React, { useState } from "react";
import { TextInput} from "react-native-paper";
import { View, Image, StyleSheet } from "react-native";


export default props =>{
    const [text,setText] = useState('')
    const [nome,setNome ] = useState('')


    return(
        <View>
            <Image
              source={require('../icons/foguete.png')}
            />
             <TextInput style={style.Input}
                Iabel = "Email"
                value={text}
                onChangeText={text => setText(text)}
                maxLength={30}
                placeholder="nome de usuario"
                keyboardType="email-address"
            /> 
            <TextInput style={style.Input}
                    secureTextEntry={true}
                    placeholder="sua senha"
                    maxLength={20}
            />
            
        </View>
    )
 }

 const style = StyleSheet.create(
    {
        Input:{
             marginTop:10,
             backgroundColor:'gray',
             
             
             borderRadius:10,
              
        }
    }
 )