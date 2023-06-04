import React, {useState} from 'react';
import { View, Text,TouchableOpacity, FlatList  } from 'react-native';
import css from '../CSS/css';

export default function Base() {


  return (
    <View>
      <Text style={css.heading}>Lista de Valores Calculados:</Text>    
    </View>
  );
}
