import React from "react";
import { View , Text , Button , StyleSheet , Image} from "react-native";

export default props => {
    return(
        <View
        style={{
         flex:1,
         alignItems:'center',
        }}
     >
         <Text style={style.test}>GAMEON</Text>
         <Image 
         source={require('../img/game.jpg')}
         style={
            {
                width:200,
                height:200,
            }
         }
         />
         <Button 
             title="Let's Begin"
             onPress={ () => props.navigation.navigate('Home ')}
         />
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