import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { GestureHandlerRootView,Swipeable } from "react-native-gesture-handler"; 

import moment from 'moment';
import 'moment/locale/pt-br'

import commonStyles from "../commonStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
 
export default props => {
 
    const tarefaConcuidaNao = props.concluidaEm != null ?
     { textDecorationLine: 'line-through' } : {}

    const date = props.concluidoEm ? props.concluidaEm : props.dataEstimada

    const dataFormat = moment(date).locale('pt-br').format('ddd, D [de] MMMM')
 
    return (
        <GestureHandlerRootView>
            <Swipeable
                 renderRightActions={getRightContent}
                 renderLeftActions={getLeftContent}
                 onSwipeableLeftOpen={() => props.onDelete && props.onDelete(props.id)}
            >

            
        <View style={style.container}>
            <TouchableWithoutFeedback
                    onPress={() => props.toggleTask(props.id)}
            >
                <View style={style.checkContainer}>
                {getCheckView(props.concluidaEm)}
                </View>

            </TouchableWithoutFeedback>
            <View>
                <Text style={[style.descricao,tarefaConcuidaNao]}>{props.descricao}</Text>
                <Text style={style.date}>{dataFormat}</Text>
            </View>
        </View>
        </Swipeable>
        </GestureHandlerRootView>
    )
}
 
function getCheckView(concluidaEm) {
    if (concluidaEm != null) {
        return (
            <View style={style.dataEstimada}>
                <Icon name='check' size={20} color='#FFF'/>
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
    descricao:{
        fontSize:15,
        color:commonStyles.colors.mainText,
    },
    date:{
        fontFamily:commonStyles.fontFamily,
        color:commonStyles.colors.subText,
        fontSize:12,
    },
    checkContainer:{
        width:'20%',
        alignItems:'center',
        justifyContent:'center',
    }
})