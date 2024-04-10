import React from "react";
import { SafeAreaView , Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

import Calls from "./components/Calls";
import Chats from "./components/Chats";
import Comuni from "./components/Comuni";
import Status from "./components/Status";

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
                                if (route.name === 'Calls'){
                                    iconName = focused ? 'person-outline' : 'person-sharp'
                                }
                                else if(route.name === 'Chats'){
                                    iconName = focused ? 'layers-outline' : 'layers'                                    
                                }
                                else if(route.name === 'Comuni'){
                                    iconName = focused ? 'menu-outline' : 'menu'                                    
                                }
                                else if(route.name === 'Status'){
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
            <Tab.Screen name="Calls" component={Calls}/>
            <Tab.Screen name="Chats" component={Chats}/>
            <Tab.Screen name="Comuni" component={Comuni}/>
            <Tab.Screen name="Status" component={Status}/>
            </Tab.Navigator>
           </NavigationContainer>
        </SafeAreaView>
    )
}