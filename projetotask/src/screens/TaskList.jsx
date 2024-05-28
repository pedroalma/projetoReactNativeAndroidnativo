import React from "react";
import { View,Text,ImageBackground,StyleSheet, SafeAreaView } from "react-native";
import moment from 'moment'
import 'moment/locale/pt-br' 
import todayImage from '../../assets/imgs/today.jpg'
import CommonStyle from "../commonStyle";
import Task from "../components/Task";

export default props =>{

           const hoje = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return(
        <SafeAreaView style={style.conteiner}>
            <ImageBackground source={todayImage} style={style.background}>
                <View style={style.titlibar}>
                    <Text style={style.titli}>hoje</Text>
                    <Text style={style.sudtitli}>{hoje}</Text>
                </View>
            </ImageBackground>
            <View style={style.taski} >
                <Task/>
                <Text>Task</Text>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    conteiner:{
        flex:1,
    },
    background:{
        flex:3,
    },
    taski:{
        flex:7,
    },
    titlibar:{
        flex:1,
        justifyContent:'flex-end'
    },
    titli:{
        fontFamily: CommonStyle.fontFamily,
        fontSize:50,
        color: CommonStyle.colors.secundary,
        marginLeft:20,
        marginBottom:20
    },
    sudtitli:{
        fontFamily: CommonStyle.fontFamily.secundary,
        fontSize:20,
        color: CommonStyle.colors.secundary,
        marginLeft:20,
        marginBottom:20
    }
})