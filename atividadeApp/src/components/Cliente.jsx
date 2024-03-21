import React ,{useState} from "react";
import { SafeAreaView , Image ,TextInput , View ,Text, StyleSheet , Button} from "react-native";

export default props =>{

    return(
        <SafeAreaView>
          <View style={estilo.um}>
            <Image
            style={estilo.img}
            source={require('../icons/atomo.png')}
            />  
            <Text style={estilo.do}>Cadastro de clientes</Text>
          </View>
          <View style={estilo.imp}>
            <TextInput
            style={estilo.im}
            maxLength={20}
            placeholder="Nome"
            keyboardType="name-phone-pad"
            />
            <TextInput
            style={estilo.imi}
            maxLength={20}
            placeholder="Email"
            keyboardType="email-address"            
            />
          </View>  
          <View>
            <TextInput 
            style={estilo.oud}
            maxLength={10}
            placeholder="Telefone"
            keyboardType="decimal-pad"
            />
          </View>
          <View>
            <TextInput
            style={estilo.tri}
            maxLength={20}
            placeholder="Endereço"
            keyboardType="decimal-pad"
            />
          </View>
          <View style={estilo.eo}> 
            <TextInput
            style={estilo.eog}
            maxLength={10}
            placeholder="Número"
            keyboardType="decimal-pad"
            />
            <TextInput 
            style={estilo.eop}
            maxLength={15}
            placeholder="Cep"
            keyboardType="decimal-pad"
            />
          </View>
          <View>
            <TextInput 
            style={estilo.tri}
            maxLength={15}
            placeholder="Cidade"
            keyboardType="decimal-pad"
            />
          </View>
          <View>
            <TextInput 
            style={estilo.tri}
            maxLength={15}
            placeholder="Estado"
            keyboardType="decimal-pad"
            />
          </View>
          <View style={estilo.com}>
          <View style={[estilo.bo]}>
            <Button  color={"#708090"} title="Cadastrar"/>
            <View style={[estilo.boyi]}> 
                <Button  color={"#708090"}title="Alterar"/> 
            </View>
          </View>
          <View style={[estilo.boi]}>
            <Button  color={"#708090"}title="Cadastrar"/>
            <View style={[estilo.boyi]}> 
                <Button color={"#708090"} title="Alterar"/> 
            </View>
          </View>
          </View>
        </SafeAreaView>
    )
    
}
const estilo = StyleSheet.create(
    {
        img:{
            marginLeft:20,
            height:50,
            width:50,
        },
        um:{
            marginTop:20,
            flexDirection:"row",
        },
        do:{
            marginLeft:17,
            margin:4,
            fontSize:30,
        },
        imp:{
            marginTop:10,
            marginLeft:20,
        },
        im:{
            fontSize:20,
            backgroundColor:"#83919a",
            borderRadius:10,            
            width:345,
        },
        imi:{
            marginTop:5,
            fontSize:20,
            backgroundColor:"#83919a",
            borderRadius:10,            
            width:345,
        },
        oud:{
            marginLeft:20,
            marginTop:5,
            fontSize:20,
            backgroundColor:"#83919a",
            borderRadius:10,            
            width:170,                
        },
        tri:{
            marginLeft:20,
            marginTop:5,
            fontSize:20,
            backgroundColor:"#83919a",
            borderRadius:10,
            width:345,  
        },
        eo:{
            flexDirection:"row",
        },
        eog:{
            marginLeft:20,
            marginTop:5,
            fontSize:20,
            backgroundColor:"#83919a",
            borderRadius:10,            
            width:170,  
        },
        eop:{
            marginLeft:5,
            marginTop:5,
            fontSize:20,
            backgroundColor:"#83919a",
            borderRadius:10,            
            width:170, 
        },
        bo:{
            marginTop:10,
            width:170,
            flexDirection:"row",
            marginLeft:20,
        },
        boi:{
            marginTop:10,
            width:170,
            flexDirection:"row",
            marginLeft:20,
        },
        boyi:{
            width:170,
            marginLeft:20,
        },
        com:{
            marginTop:20,
            marginLeft:25,
        },
    }
)
