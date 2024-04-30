import React from "react";
import { View , Text  , StyleSheet , Image , TouchableOpacity} from "react-native";
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
        <TouchableOpacity onPress={() => props.navigation.navigate('GameTen')}>
            <View style={style.tesi}>
            <Text style={style.text}>Let's Begin</Text>
            <Icon name='chevron-forward' size={24}  style={style.Icon} />   
            </View>                         
        </TouchableOpacity> 
     </View>
    )
}

const style = StyleSheet.create(
    {
        test:{
            fontSize: 40,
            color:'#434A62'
        },
        tesi:{
            flexDirection:'row',           
            backgroundColor:'#852D84',
            borderRadius:50,
            paddingLeft:75,
            paddingRight:75,
            marginTop:50,
        },
        text:{
            height:32,
            color:'#FDFEFD',
            
        },
        Icon:{
            textAlign:"right",
            color:'#322C2B',
        }
    }
)