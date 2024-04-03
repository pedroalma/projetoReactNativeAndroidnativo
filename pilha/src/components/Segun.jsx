import React from "react";
import { SafeAreaView, Pressable ,View, Text } from "react-native";

export default props => {
    return(
        <SafeAreaView>
           <View>
            <Pressable onPress={() => props.navigation.navigate('Cuba')} >
                <Text>HAVANA</Text>
                <Text>CUBA</Text>
            </Pressable>
           </View>
           <View>
            <Pressable onPress={() => props.navigation.navigate('Home')} >
                <Text>PARIS</Text>
                <Text>FRANÇA</Text>
            </Pressable>
           </View>
           <View>
            <Pressable onPress={() => props.navigation.navigate('Home')} >
                <Text>TOKYO</Text>
                <Text>JAPAN</Text>
            </Pressable>
           </View>
           <View>
            <Pressable onPress={() => props.navigation.navigate('Home')} >
                <Text>AMSTERDAM</Text>
                <Text>Holanda</Text>
            </Pressable>
           </View>
           <View>
            <Pressable onPress={() => props.navigation.navigate('Home')} >
                <Text>MUNBAI</Text>
                <Text>INDIA</Text>
            </Pressable>
           </View>
        </SafeAreaView>
        
    )
}