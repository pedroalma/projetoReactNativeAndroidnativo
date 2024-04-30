import React from "react";
import { SafeAreaView} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./View/SettingsScreen";
import ProfileScreen from "./View/ProfileScreen";
import HomeScreen from "./View/HomeScreen";
import DetailsScreen from "./View/DetailsScreen";
import Icon from 'react-native-vector-icons/Ionicons'


const SettingsStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default props =>{
    return(
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) =>({
                        
                        tabBarIcon: ({focused, color , size })=>{
                            let iconName 

                            if (route.name === 'left'){
                                iconName = focused 
                                ? 'cog'
                                : 'cog-outline'
                            }
                            else if(route.name === 'right'){
                                iconName = focused
                                ? 'navigate'
                                : 'navigate-circle' 
                            }
                            return <Icon name={iconName} size={size} color={color}/>
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveBackgroundColor: 'gray',
                        tabBarShowLabel: true,
                        headerShown: false
                    })}
                    >
                    <Tab.Screen name="left">
                        {()=>(
                            <SettingsStack.Navigator>
                                <SettingsStack.Screen 
                                name="Settings" 
                                component={SettingsScreen}
                                />
                                <SettingsStack.Screen name="Profile" component={ProfileScreen}/>
                            </SettingsStack.Navigator>
                        )}
                    </Tab.Screen>
                    <Tab.Screen name="right" >
                        {() =>(
                            <HomeStack.Navigator>
                                <HomeStack.Screen name="Home" component={HomeScreen}/>
                                <HomeStack.Screen name="Details" component={DetailsScreen}/>
                            </HomeStack.Navigator>
                        )}
                    </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}