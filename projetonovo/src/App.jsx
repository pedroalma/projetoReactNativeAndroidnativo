import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import Details from "./components/Details";
import Favorite from "./components/Favorite";
import Shared from "./components/Shared";

const Stack = createNativeStackNavigator();

export default props => { 
    return(
        <SafeAreaView style={{flex:1,}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Details" component={Details}/>
                    <Stack.Screen name="Favorite" component={Favorite}/>
                    <Stack.Screen name="Shared" component={Shared}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}