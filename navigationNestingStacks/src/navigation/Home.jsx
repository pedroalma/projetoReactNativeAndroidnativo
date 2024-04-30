import React from "react";
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../views/Feed";
import Mensage from "../views/Mensage";
 
const Tab = createBottomTabNavigator();
 
export default props =>{
    return (
        <SafeAreaView style={{flex: 1}}>
            <Tab.Navigator options={{ headerShown: false }}>
                <Tab.Screen name='Feed' component={Feed}/>
                <Tab.Screen name='Menssage' component={Mensage}/>
            </Tab.Navigator>
        </SafeAreaView>
    )
}