import {View, Text, StyleSheet,Pressable} from 'react-native';
import React from 'react';
 
function App(){
    const pessoas =[
        {
            nome:'José',
            idade: 15
        },
        {
            nome: 'Maria',
            idade:29
        },
        {
            nome:'João',
            idade:25
        },
        {
            nome:'Victoria',
            idade:60
        },
        {
            nome:'Pedro',
            idade:18
        }
    ];
    const maiores = pessoas.filter(pessoa => pessoa.idade >= 18);
 
    return(
        <View>
            <Text style={style.titulo} >Maiores de 18 anos</Text>
            <View style={style.item}>
             {maiores.map(pessoa=>(
                <View key={pessoa.nome} >
                    <Pressable  style={style.nomeIdade} >
                        <Text style={style.txt}>{pessoa.nome}</Text>
                        <Text style={style.txt2} >Idade: {pessoa.idade}</Text>
                    </Pressable>
                </View>
             ))}
            </View>
        </View>
    );
}
 
const style = StyleSheet.create(
    {
        titulo:{
            fontSize:35,
            color:'#C73659',
            margin:60,
            alignItems:'center'
        },
        nomeIdade:{
            backgroundColor:'#EEEEEE',
            elevation:5,
            borderRadius:5,
            height:80,
            width:200,
            padding:5,
            margin:5
        },
        txt:{
            textAlign:'center',
            fontSize:20,
            color:"#A91D3A",
            marginTop:10
        },
        txt2:{
            margin:10,
            color:'#151515',
            textAlign:'center'
        },
        item:{
            alignItems:'center',
        }
    }
)
 
export default App;