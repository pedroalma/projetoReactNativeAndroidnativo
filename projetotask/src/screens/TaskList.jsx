import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Platform, Alert,ImageBackground } from "react-native";
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import CommonStyles from "../commonStyle";
import Task from "../components/Task";
import AddTask from "./AddTask";

export default class TaskList extends Component {

    render() {

        const date = moment().locale('pt-br').format('ddd, D [de] MMMM')

        return (
            <SafeAreaView style={style.conteiner}>
                <AddTask

                />
                <ImageBackground source={todayImage} style={style.background}>
                    <View style={style.titlibar}>
                        <Text style={style.titli}>hoje</Text>
                        <Text style={style.sudtitli}>{date}</Text>
                    </View>
                </ImageBackground>
                <View style={style.taski} >
                    <Task
                        descricao="comprar livro"
                        dataEstimada={new Date()}
                        concluidaEm={new Date()}
                    />
                    <Task
                        descricao='Ler livro'
                        dataEstimada={new Date()}
                        concluidaEm={null}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
const style = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    taski: {
        flex: 7,
    },
    titlibar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    titli: {
        fontFamily: CommonStyles.fontFamily,
        fontSize: 50,
        color: CommonStyles.colors.secundary,
        marginLeft: 20,
        marginBottom: 20
    },
    sudtitli: {
        fontFamily: CommonStyles.fontFamily.secundary,
        fontSize: 20,
        color: CommonStyles.colors.secundary,
        marginLeft: 20,
        marginBottom: 20,
    }
})