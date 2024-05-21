import React from 'react';
import { View,Text ,Button, Alert} from 'react-native';

function App() {
  const products = [
    {
      id: 1,
      name: 'Banana',
      price: 1.50,
      emoji: '🍌'
    },
    {
      id: 2,
      name: 'Tomate',
      price: 2.00,
      emoji: '🍅'
    },
    {
      id: 3,
      name: 'Pepino',
      price: 1.00,
      emoji: '🥒'
    },
    {
      id: 4,
      name: 'Laranja',
      price: 3.00,
      emoji: '🍊'
    },
  ];
  function alerta({item: usr}){
    Alert.alert('Comprar','tem certeza ?',
    [{
        text:'Sim',
    },
    {
        text:'Não'
    }
]
)
  }
  return (
    <View className="lista">
      {products.map(product => (
        <Text style={{ listStyleType: 'none' }} key={product.id}>
          <View className="card">
            <Text>{product.emoji}</Text>
            <Text>{product.name}</Text>
            <Text>Preço: R${product.price}</Text>
            <Button title="Comprar" onPress={() => alerta(usr)}/> 
          </View>
        </Text>
      ))}
    </View>
  );
}

export default App;