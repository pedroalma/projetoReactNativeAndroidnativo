import React from "react";
import { View ,Text , Button} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props =>{
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
             <Icon name="moon-outline" size={20} color="#A9A9A9"/>
             <Button
            title="GO"
            onPress={() => props.navigation.navigate('Shared')}
            />
        </View>
    )
}