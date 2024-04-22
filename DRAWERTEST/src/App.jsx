import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import RedBull from './components/RedBull';
import Space from './components/Space';
import Santos from './components/Santos';

const Drawer = createDrawerNavigator();

export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName='RedBull'
                screenOptions={{
                    drawerActiveBackgroundColor:'#102C57',
                    drawerActiveTintColor:'#DAC0A3',
                }}>
                    <Drawer.Screen name='RedBull' component={RedBull}/>
                    <Drawer.Screen name='SpaceX' component={Space}/>
                    <Drawer.Screen name='Santos' component={Santos}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}