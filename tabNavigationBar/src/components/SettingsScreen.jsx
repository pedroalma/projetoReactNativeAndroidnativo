import React from "react";
import { View , Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props =>{
    return(
        <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Text>ola</Text>
            <Icon name="hourglass-outline" size={30} color="#581845"/> 
        </View>
    )
}