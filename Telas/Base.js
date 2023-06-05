import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
import css from '../CSS/css';

export default function Base() {
  const [lista, setLista] = useState([]);

  const handleItemClick = (item) => {
    console.log('Item clicado:', item);
    setSelectedItem(item.id);
  };

  const AddItem = () => {
    const baseMaiorNum = parseFloat(inputValues.baseMaior);
    const baseMenorNum = parseFloat(inputValues.baseMenor);
    const alturaNum = parseFloat(inputValues.altura);
    const larguraNum = parseFloat(inputValues.largura);

    const volumeCaixaTrapezoidal = ((baseMaiorNum + baseMenorNum) * alturaNum * larguraNum) / 2 / 1000;

    const novoItem = {
      id: Date.now(),
      name: `B+:${inputValues.baseMaior} / B-:${inputValues.baseMenor} / A:${inputValues.altura} / L:${inputValues.largura} / ${volumeCaixaTrapezoidal.toFixed(2)}L`,
    };

    setLista([...lista, novoItem]);
    setInputValues({
      baseMaior: '',
      baseMenor: '',
      altura: '',
      largura: '',
    });
    setSelectedItem(null);
  };

  const RemoveItem = (itemId) => {
    const updatedArray = lista.filter((item) => item.id !== itemId);
    setLista(updatedArray);
    setSelectedItem(null);
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const [inputValues, setInputValues] = useState({
    baseMaior: '',
    baseMenor: '',
    altura: '',
    largura: '',
  });

  const handleChangeInput = (field, value) => {
    setInputValues({ ...inputValues, [field]: value });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleItemClick(item)}
      style={[
        css.itemContainer,
        selectedItem === item.id && css.selectedItemContainer,
      ]}
    >
      <Text
        style={[
          css.itemText,
          selectedItem === item.id && css.selectedItemText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={css.backgroundBase}>     
      <TextInput
        style={css.input}
        keyboardType="numeric"
        placeholder="Profundidade Maior"
        value={inputValues.baseMaior}
        onChangeText={(value) => handleChangeInput('baseMaior', value)}
      />
      <TextInput
        style={css.input}
        keyboardType="numeric"
        placeholder="Profundidade Menor"
        value={inputValues.baseMenor}
        onChangeText={(value) => handleChangeInput('baseMenor', value)}
      />
      <TextInput
        style={css.input}
        keyboardType="numeric"
        placeholder="Altura"
        value={inputValues.altura}
        onChangeText={(value) => handleChangeInput('altura', value)}
      />
      <TextInput
        style={css.input}
        keyboardType="numeric"
        placeholder="Largura"
        value={inputValues.largura}
        onChangeText={(value) => handleChangeInput('largura', value)}
      />

      <View style={css.btnBase}> 
        <Button 
          title="Adicionar Item" 
          color='red' 
          onPress={AddItem} 
          disabled={!inputValues.baseMaior || !inputValues.baseMenor || !inputValues.altura || !inputValues.largura}
        /> 
        <Text />
        <Button
          title="Remover Item"
          color='red'
          onPress={() => RemoveItem(selectedItem)} 
          disabled={selectedItem === null}
        />
      </View>

      <Text style={css.listaTexto}>Prof.Maior / Prof.Menor / Altura / Largura / Volume</Text>
      <FlatList
        style={css.itemList}
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
