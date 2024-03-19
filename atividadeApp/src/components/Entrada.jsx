import React , {useState} from "react";
import { SafeAreaView , Image, TextInput, Text , Button, StyleSheet, View } from "react-native";

export default Props =>{
    const [nome , setnome] = useState(nome)

    const text = () => {
        setnome ('ola')
    }

    return(
        <SafeAreaView style={tilo.fundo}>
            <Image 
            source={require('../icons/foguete.png')}
            />
            <TextInput

            style={tilo.in}
            label = "Email"
            value={text}
            onChangeText={text => setText()}
            maxLength={10}
            placeholder="insira seu usuario"
            keyboardType="email-address"
            
            />
            <TextInput
            style={tilo.in}
            secureTextEntry={true}
            maxLength={10}
            placeholder="sua senha"
            />
            <Text style={tilo.te} >Nao tem usuario. clique aqui ?</Text>
            <View style={tilo.fo1}>
            <Button color={"#708090"}title="Entrar" onPress={text}/>
            </View>
            <View style={tilo.fo}>
            <Button color={"#708090"} title="sair"/>
            </View>
            <Text>{nome}</Text>
            
        </SafeAreaView>
    )
}

const tilo = StyleSheet.create(
    {
        fundo:{
            marginTop:40,
            alignItems:"center",
        },
        in:{
            fontSize:20,
            backgroundColor:"#83919a",
            marginTop:5,
            borderRadius:100,
            padding:6,
            height:35,
            textAlign:"center",

        },
        te:{
            marginTop:8,
            fontSize:15,
        },
        fo1:{
            marginTop:20,
            margin:10,
        },
       
        
    }
)