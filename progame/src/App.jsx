import React from "react";
import { SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import GameEn from "./components/GameEn";
import GameTen from "./components/GameTen";

const Stack = createNativeStackNavigator(); 

export default ()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="GameEn" component={GameEn}/>
                <Stack.Screen name="GameTen" component={GameTen}/>
            </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}