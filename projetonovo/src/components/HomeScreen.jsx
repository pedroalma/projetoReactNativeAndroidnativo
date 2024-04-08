import React from "react";
import { View ,Text, Button } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props =>{
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Text>home</Text>
            <Icon name="airplane-outline" size={20} color="#A9A9A9"/>
            <Button
            title="GO to Details"
            onPress={() => props.navigation.navigate('Details')}
            />
        </View>
    )
}