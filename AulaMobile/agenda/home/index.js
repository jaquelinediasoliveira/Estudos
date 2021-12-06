import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style'

export default function Home({navigation}) { 
    
  const dados = [
    {
      "tarefa": "Buscar pão",
      "data": "06/12/2021",
      "descricao": "Sair cedo e ir na padaria"
    },
    {
      "tarefa": "Catar fezes dos cachorros",
      "data": "06/12/2021",
      "descricao": "Chegar do SENAI recolher e descartar as fezes dos doguinhos"
    }
  ]

  return (
    <View style={style.body}>
      {dados.map((item, index) =>
        <TouchableOpacity style={style.card} onPress={() => {navigation.navigate('Info', item)}} key={index}>
          <Text>Tarefa: {item.tarefa}</Text>
          <Text>Data: {item.data}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}