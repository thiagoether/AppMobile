import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import css from '../CSS/css';

export default function Box() {
  const [baseMaior, setBaseMaior] = useState('');
  const [baseMenor, setBaseMenor] = useState('');
  const [altura, setAltura] = useState('');
  const [comprimento, setComprimento] = useState('');
  const [volume, setVolume] = useState(0);

  const calcularVolume = () => {
    // Conversão da entrada para números
    const baseMaiorNum = parseFloat(baseMaior);
    const baseMenorNum = parseFloat(baseMenor);
    const alturaNum = parseFloat(altura);
    const comprimentoNum = parseFloat(comprimento);
    // Cálculo do volume da caixa
    const volumeCaixaTrapezoidal = ((baseMaiorNum + baseMenorNum) * alturaNum * comprimentoNum) / 2;
    // Atualização do estado com o valor do volume
    setVolume(volumeCaixaTrapezoidal.toFixed(2));
    //Enviar informações para outra tela   

  
  }; 

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>    
      <View style={css.container}>
        <Text />
        <Image source={require('../Imagens/logo.jpg')} style={css.image} />
        <Text style={css.label}>Profundidade Maior:</Text>
        <TextInput
          style={css.input}
          keyboardType="default"
          value={baseMaior}
          onChangeText={setBaseMaior}
        />
        <Text style={css.label}>Profundidade Menor:</Text>
        <TextInput
          style={css.input}
          keyboardType="default"
          value={baseMenor}
          onChangeText={setBaseMenor}
        />        
        <Text style={css.label}>Altura:</Text>
        <TextInput
          style={css.input}
          keyboardType="default"
          value={altura}
          onChangeText={setAltura}
        />        
        <Text style={css.label}>Largura:</Text>
        <TextInput
          style={css.input}
          keyboardType="default"
          value={comprimento}
          onChangeText={setComprimento}
        />

        <TouchableOpacity style={css.button} onPress={calcularVolume}>
          <Text style={css.buttonText}>Calcular Volume</Text>
          <MaterialIcons name="calculate" size={24} color="white" />
        </TouchableOpacity>
        <Text style={css.result}>Volume: {volume / 1000} Litros</Text>        
        
      </View>
    </ScrollView>
  );
}
