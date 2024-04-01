import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default props =>{
    return(
        <SafeAreaView>
            <View>
                <Text style={estilo.fon}>FOX<Text style={estilo.fou}>HUB</Text></Text>
            </View>
            <View>
                <Text style={estilo.fonp}>Welcome Back,</Text>
            </View>
            <View>
                <Text>Sign in to continue</Text>
            </View>
        </SafeAreaView>
    )
}
const estilo = StyleSheet.create(
    {
        fon:{
            color:'#000000',
            fontSize:20,
            fontWeight:'bold',
            marginLeft:5,
        },
        fou:{
            color:'#0000FF',
        },
        fonp:{
            fontWeight:'bold',
            fontSize:20,
            color:'#000000',
        },
    }
) 