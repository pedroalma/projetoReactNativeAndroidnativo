import React from "react";
import { SafeAreaView, Text , Button, TextInput } from "react-native";

export default props => {
    return(
        <SafeAreaView>
           <Text>ola</Text>
           <TextInput 
              label = "email"
              maxLength={15}
              placeholder="pais"
              keyboardType="email-address"
           />
           <TextInput
           placeholder="cidade"
           maxLength={20}/>
           
           <Button
           title="ola"
           onPress={() => props.navigation.navigate('segun')}
           />
        </SafeAreaView>
    )
}