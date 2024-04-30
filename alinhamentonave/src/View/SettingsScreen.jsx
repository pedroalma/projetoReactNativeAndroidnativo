import React from "react";
import { View, Text,Button } from "react-native";

export default props=>{
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text>Home Settings</Text>
            <Button
            title="Go to Profile"
            onPress={()=>props.navigation.navigate('Profile')}
            />
        </View>
    )
}