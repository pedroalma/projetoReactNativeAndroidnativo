import React from "react";
import { SafeAreaView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Pagini from "./components/Pagini";
import segun from "./components/segun";

const Stack = createNativeStackNavigator();
export default ()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Pagini}/>
                    <Stack.Screen name="segun" component={segun}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}