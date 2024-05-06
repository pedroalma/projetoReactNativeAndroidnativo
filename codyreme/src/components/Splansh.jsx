import React from "react";
import { View , Text, TouchableOpacity, Image ,StyleSheet } from "react-native";

export default props => {
    return(
        <View style={{ 
            flex:1,
            alignItems:'center',
            backgroundColor:'#FDDE55',
            }}>
            <Image 
            source={require('../icons/foguete.png')}  
            style={
                {
                    marginTop:20,
                    width:250,
                    height:250,
                }
            }          
            />
            <TouchableOpacity style={style.textD} onPress={() => props.navigation.navigate('Login') }>
                <Text style={style.text}>IR</Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create(
    {
        text:{
            fontSize:30,
            backgroundColor:'#03AED2',
            textAlign:'center',
            borderRadius:20,
            width:80,
            height:40,
            alignItems:'center',
        },
        
        textD:{
            marginTop:30,
        },
    }
)