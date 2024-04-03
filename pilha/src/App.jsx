import React from "react";
import { SafeAreaView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Pagini from "./components/Pagini";
import Segun from "./components/Segun";
import Cuba from "./components/Cuba";

const Stack = createNativeStackNavigator();
export default ()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Pagini}/>
                    <Stack.Screen name="segun" component={Segun}/>
                    <Stack.Screen name="cuba" component={Cuba}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}