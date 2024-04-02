import React from "react";
import { View,Text, Button } from "react-native";
import { Navigate } from "react-router-dom";

export default props => {
    return (
        <View style={{
            flex: 1,
            alignItems:'center',
            justifyContent:'center'
        }}> 
             <Text>Olá</Text>
            <Button 
                title="Detail"
                onPress={ () => props.navigation.navigate('Detail')}
            />
            
        </View>
    )
}