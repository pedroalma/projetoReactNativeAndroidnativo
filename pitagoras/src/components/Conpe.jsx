import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

function App() {
  const numbers = [1, 2, 3, 4, 5];

  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return (
    <View style={style.viewfundo}>
      <Text>Números declarados: 1, 2, 3, 4, 5</Text>
      <Text>A soma dos números é {sum}.</Text>
    </View>
  );
}

const style = StyleSheet.create(
    {
        viewfundo:{
            Color:'#543310',
            margin:60,
            alignItems:'center'
        },
    }
)

export default App;
