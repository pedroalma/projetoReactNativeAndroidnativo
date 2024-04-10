import React from "react";
import { SafeAreaView , Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import FavoriteScreen from "./components/FavoriteScreen";
import ShareScreen from "./components/ShareScreen";

const Tab = createBottomTabNavigator();


export default props =>{
    return(
        <SafeAreaView style={{flex:1}}> 
           <NavigationContainer>
            <Tab.Navigator
                  screenOptions={
                    ({route}) =>(
                        {
                            tabBarIcon: ({focused,color,size}) => {
                                let iconName;
                                if (route.name === 'Home'){
                                    iconName = focused ? 'person-outline' : 'person-sharp'
                                }
                                else if(route.name === 'Set'){
                                    iconName = focused ? 'layers-outline' : 'layers'                                    
                                }
                                else if(route.name === 'Favo'){
                                    iconName = focused ? 'menu-outline' : 'menu'                                    
                                }
                                else if(route.name === 'Sha'){
                                    iconName = focused ? 'map-outline' : 'map-sharp'                                    
                                }
                                return <Icon name={iconName} size={size} color={color}/>
                            },
                            tabBarActiveTintColor: '#12372A',
                            tabBarInactiveTintColor: '#12372A',
                        }
                    )
                }
            >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Set" component={SettingsScreen}/>
            <Tab.Screen name="Favo" component={FavoriteScreen}/>
            <Tab.Screen name="Sha" component={ShareScreen}/>
            </Tab.Navigator>
           </NavigationContainer>
        </SafeAreaView>
    )
}