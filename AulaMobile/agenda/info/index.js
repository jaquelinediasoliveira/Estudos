import React from 'react';
import {View, Text} from 'react-native';
import style from './style'

export default function Info({route, navigation}){
    const {tarefa, data, descricao} = route.params;

    return(
        <View style={style.body}>
            <View style={style.card}>
                <View>
                    <Text style={style.dados}>Tarefa: </Text>
                    <Text style={style.dados}>Data: </Text>
                    <Text style={style.dados}>Descrição:  </Text>
                </View>
                <View style={{width: '60%'}}>
                    <Text>{tarefa}</Text>
                    <Text>{data}</Text>
                    <Text>{descricao}</Text>
                </View>
            </View>
        </View>
    );
}