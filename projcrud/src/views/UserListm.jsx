import React from "react";
import { View, Text, FlatList, Alert } from 'react-native';
import user from "../data/user";
import { ListItem, Avatar, ThemeProvider } from "@rneui/base";
 
export default props => {
    function confirmUserDeletion(user){
      Alert.alert('Excluir usuário','Deseja escluir o usuário',
      [{
        text:'Sim',
        onPress(){
            console.log('delete' + user.id)
        }
      },      
      {
        text: 'Não'
      }
    ]
      )
    }
 
    function getUserItem({item: user}){
        return(
           <ThemeProvider>
        <Avatar source={{uri: user.avatarURL}}/>
        <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Title>{user.name}</ListItem.Title>
        </ListItem.Content>
 
          <ListItem.Chevron
          name="edit"
          color="orange"
          size={25}
          onPress={
            ()=> props.navigation.navigate('UserForm', user)
          }
          />
          <ListItem.Chevron
           name="delete"
           color="red"
           size={25}
           onPress={() => confirmUserDeletion(user)}
          />
 
        </ThemeProvider>
       
        )
 
    }
 
    return(
        <View>
            <FlatList
              keyExtractor={user => user.id.toString()}
              data={users}
              renderItem={getUserItem}
            />
        </View>
    )
}
 