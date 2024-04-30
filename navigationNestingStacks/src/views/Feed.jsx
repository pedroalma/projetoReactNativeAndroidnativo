import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { Text, View } from "react-native";

export default props =>{
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Text>Feed</Text>
        </View>
    )
}