import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import css from '../CSS/css';
export default function Duto() {
  const [frequenciaRessonancia, setFrequenciaRessonancia] = useState(0);
  const [largurad, setLargurad] = useState('');
  const [alturad, setAlturad] = useState('');
  const [comprimentod, setComprimentod] = useState('');

  const calcularFrequencia = () => {
    //Conversão da entrada para números
    const larguradNum = parseFloat(largurad);
    const alturadNum = parseFloat(alturad);
    const comprimentodNum = parseFloat(comprimentod);
    //Cáclculo da frequência
    const freq = 343 / (2 * comprimentodNum) + (larguradNum + alturadNum);
    //Atualização da frequência
    setFrequenciaRessonancia(freq.toFixed(2));
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
    <View style={css.container}>
      <Text />
      <Image source={require('../Imagens/logo.jpg')} style={css.image} />
      <Text style={css.label}>Largura do Duto</Text>
      <TextInput
          style={css.input}
          keyboardType="default"
          value={largurad}
          onChangeText={setLargurad}
        />        
      <Text style={css.label}>Altura do Duto</Text>
      <TextInput
          style={css.input}
          keyboardType="default"
          value={alturad}
          onChangeText={setAlturad}
        />        
      <Text style={css.label}>Comprimento do Duto</Text>
      <TextInput
          style={css.input}
          keyboardType="default"
          value={comprimentod}
          onChangeText={setComprimentod}
        />
      <TouchableOpacity style={css.button} onPress={calcularFrequencia}>
          <Text style={css.buttonText}>Calcular Duto</Text>
          <MaterialIcons name="calculate" size={24} color="white" />
      </TouchableOpacity>
      <Text style={css.result}>Frequencia: {frequenciaRessonancia} Hz</Text>        
    </View>
    </ScrollView>
  );
}
