import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Falta from './components/Falta';
import Cursos from './components/Cursos';
import Documentos from './components/Documentos';
import Notas from './components/Notas';
import Ajuda from './components/Ajuda';

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
                    <Drawer.Screen name='Faltas' component={Falta}/>
                    <Drawer.Screen name='Cursos' component={Cursos}/>
                    <Drawer.Screen name='Documemtos' component={Documentos}/>
                    <Drawer.Screen name='Notas' component={Notas}/>
                    <Drawer.Screen name='Ajuda' component={Ajuda}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}