import React from "react";
import { SafeAreaView, StyleSheet, Text ,View} from "react-native";

import Primeiro from "./components/Primeiro";
import Segundo from "./components/Segundo";
import Terceiro from "./components/Terceiro";

export default () =>(
    <SafeAreaView style={style.App}>
        <Text style={style.tex}>Tela principal</Text>
        <Primeiro/>
        <Segundo/>
        <Terceiro/>
    </SafeAreaView>
)

const style = StyleSheet.create(
    {
        tex:{
            fontSize: 30,
            fontStyle:"italic",
        },
        App:{
            backgroundColor: '#696969',
            flex: 1,
            flexDirection: "column",
            padding: 20,
        },
    }
)