import React from "react";
import { View , Text  , StyleSheet , Image, TouchableOpacity  } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
    return(
        <View
        style={{
         flex:1,
         alignItems:'center',
         backgroundColor:'#ffffff'
        }}
     >
         <Text style={style.test}>GAMEON</Text>
         <Image 
         source={require('../img/game.jpg')}
         style={
            {
                width:270,
                height:200,
            }
         }
         />
        <TouchableOpacity onPress={() => props.navigation.navigate('GameEn')}>
            <Text>Let's Begin</Text>
            <Icon name='chevron-forward' size={15} color='#fff'/>                       
        </TouchableOpacity> 
     </View>
    )
}

const style = StyleSheet.create(
    {
        test:{
            fontSize: 40,
        }
    }
)