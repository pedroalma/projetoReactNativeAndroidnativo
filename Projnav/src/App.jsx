import React from "react";
import { SafeAreaView, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/HomeScreen";
import DetailScreeen from "./components/DetailScreeen";
import Produtos from "./components/Produtos";
import About from "./components/About";

const Stack = createNativeStackNavigator();

export default  ()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} options={{title:'inicio'}}/>
                    <Stack.Screen name="Produtos" component={Produtos} options={{title:'produtos'}}/>
                    <Stack.Screen name="Abolt" component={About} options={{title:'Abolt'}}/>
                    <Stack.Screen name="Detail" component={DetailScreeen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}


