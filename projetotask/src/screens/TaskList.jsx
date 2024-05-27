import React from "react";
import { View,Text,ImageBackground,StyleSheet, SafeAreaView } from "react-native"; 
import todayImage from '../../assets/imgs/today.jpg'
export default props =>{
    return(
        <SafeAreaView style={style.conteiner}>
            <ImageBackground source={todayImage} style={style.background}>
                
            </ImageBackground>
            <Text>Hoje</Text>
                
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    conteiner:{
        flex:1,
    },
    background:{
        flex:3,
    }
})