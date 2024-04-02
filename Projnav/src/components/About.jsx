import React from "react";
import { View, Text , Button} from "react-native";

export default props => {
    return(
        <View
           style={{
            flex:1,
            alignItems:'center',
            justifyContent: "center"
           }}
        >
            <Text>Destail Screen</Text>
            <Button 
                title="Produtos"
                onPress={ () => props.navigation.navigate('Produtos')}
            />
        </View>
    )
}