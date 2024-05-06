import React from "react";
import { SafeAreaView } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Splansh from "./components/Splansh";
import Login from "./components/Login";

const Stack = createNativeStackNavigator();

export default () =>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Splansh" component={Splansh} options={{headerTintColor:'#FEEFAD',}}/>
                    <Stack.Screen name="Login" component={Login} options={{headerTintColor:'#FEEFAD',}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}