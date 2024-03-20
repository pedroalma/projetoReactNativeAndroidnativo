import React , {useState} from "react";
import { SafeAreaView , Image, TextInput, Text , Button, StyleSheet, View } from "react-native";

export default Props =>{

    const [nome , setNome] = useState(nome)
    const [text , setText] = useState(text)
    const [senha , setSenha] = useState(senha)
    const [aviso , setAviso] = useState(aviso)
    const [suma,setSuma] = useState(suma)

    function autenticar() {
        if((text == 'pedro') && (senha ==  123)){
            setSuma('Bem  vindo')
        }else{
            setSuma('senha ou usuario incorreto')
        }
    
    }

    function sai(){
        if(aviso == 'Bem  vindo'){
            setSuma('suma da qui')
        }else{
            (aviso == 'senha ou usuario incorreto')
            setSuma('suma daqui')
        }
    }
    return(
        <SafeAreaView style={tilo.fundo}>

            <Image 
            source={require('../icons/foguete.png')}
            />

            <TextInput
            style={tilo.in}
            label = "Email"
            onChangeText={value => setText(value)}
            maxLength={10}
            placeholder="insira seu usuario"
            keyboardType="email-address"
            
            />

            <TextInput
            style={tilo.in}
            secureTextEntry={true}
            onChangeText={value => setSenha(value)}
            maxLength={10}
            placeholder="sua senha"
            />

            <Text style={tilo.te} >Nao tem usuario. clique aqui ?</Text>

            <View style={tilo.fo1}>
            <Button color={"#708090"}title="Entrar" onPress={autenticar}/>
            </View>

            <View style={tilo.fo}>
            <Button color={"#708090"} title="sair" onPress={sai} />
            </View>

            <Text style={tilo.tes}>{suma}</Text>
            
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
            marginTop:20,
            fontSize:20,
            backgroundColor:"#83919a",
            marginTop:5,
            borderRadius:100,
            padding:6,
            width:210,
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
        tes:{
            marginTop:10,
        }    
        
    }
)