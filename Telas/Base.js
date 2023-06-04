import React, {useState} from 'react';
import { View, Text,TouchableOpacity, FlatList, Button  } from 'react-native';
import css from '../CSS/css';


export default function Base() {
  // Array com os itens da lista
  const [lista, setLista] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ]);

  const handleItemClick = (item) => {
    // Função para manipular o clique no item da lista
    console.log('Item clicado:', item);
    setSelectedItem(item.id);
  };

  const AddItem = () => {
    const newItem = { id: lista.length + 1, name: `Item ${lista.length + 1}` };
    setLista([...lista, newItem]);
  };

  const RemoveItem = (itemId) => {
    const updatedArray = lista.filter((item) => item.id !== itemId);
    setLista(updatedArray);
  };

  const [selectedItem, setSelectedItem] = useState(null);
  


  return (
    <View styles={css.backgroundBase}>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemClick(item)}>
            <View>
              <Text style={css.listaTexto}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />    
       <View style={css.btnBase}>
        <Button title="Adicionar Item" onPress={AddItem} />      
        <Button title="Remover Item" onPress={RemoveItem} /> 
       </View>
    </View>
    
  );
}
