import React from "react";
import { SafeAreaView, Text, ImageBackground, StyleSheet, View } from "react-native";
 
// import commonStyles from '../commonStyles';
import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br';
import commonStyles from "../commonStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
 
export default props => {
 
 
 
    // const tarefaConcuidaNao = props.concluidaEm != null ?
 
    return (
        <View style={style.container}>
            <View>
                <Text>Concluido</Text>
            </View>
 
            <View>
                <Text>Hoje</Text>
                <Text>31/02</Text>
            </View>
        </View>
    )
}
 
function getCheckView(concluidaEm) {
    if(concluidaEm != null) {
        return (
            <View style={style.dataEstimada}>
                <Icon name='check' size={20} color='#fff'/>
            </View>
        )
    } else {
        return (
            <View style={style.pendente}>
 
            </View>
        )
    }
}
 
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#2c2c2c',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    pendente:{
        height:25,
        width:25,
        borderRadius:13,
        borderWidth:1,
        borderColor:'#555',
    },
    dataEstimada:{
        height:25,
        width:25,
        borderRadius:13,
        borderWidth:1,
        backgroundColor:'#4d7031',
        alignItems:'center',
        justifyContent:'center'
    },
})