import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

export default props =>{

    const [text,onChangeText] = useState('Insira um texto')
    const [number,onChangeNumber] = useState('')

    return(
        <SafeAreaView>
            <Text>Entrada de texto</Text>
            <TextInput
                 style={style.input}   
                 onChangeText={onChangeText}
                 value={text}
                 
                 maxLength={50}
            />
            <TextInput 
                style={style.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="insira um numero"
                keyboardType="url"
                
            />
        </SafeAreaView>
    )
}
const style = StyleSheet.create(
    {
        input:{
            height:40,
            margin:12,
            borderWidth:1,
            padding:10,
        }
    }
) 