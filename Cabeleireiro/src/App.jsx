import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Compri from './components/Compri';
import ComSeg from './components/ComSeg';
import ComTri from './components/ComTri';



const Drawer = createDrawerNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName='Ajuda'
                screenOptions={{
                    drawerActiveBackgroundColor:'#0E46A3',
                    drawerActiveTintColor:'#FEFAF6',
                }}>
                    <Drawer.Screen name='Faltas' component={Compri}/>
                    <Drawer.Screen name='Cursos' component={ComSeg}/>
                    <Drawer.Screen name='Ajuda' component={ComTri}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}