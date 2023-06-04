import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import NumericInput from 'react-native-numeric-input';

const VolumeCalculator = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [volume, setVolume] = useState('');

  const calculateVolume = () => {
    const calculatedVolume = length * width * height;
    setVolume(calculatedVolume);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Comprimento:</Text>
      <NumericInput
        value={length}
        onChange={setLength}
        valueType='real'
        step={0.1}
        minValue={0}
        style={styles.input}
      />
      <Text style={styles.label}>Largura:</Text>
      <NumericInput
        value={width}
        onChange={setWidth}
        valueType='real'
        step={0.1}
        minValue={0}
        style={styles.input}
      />
      <Text style={styles.label}>Altura:</Text>
      <NumericInput
        value={height}
        onChange={setHeight}
        valueType='real'
        step={0.1}
        minValue={0}
        style={styles.input}
      />
      <Button title="Calcular Volume" onPress={calculateVolume} />
      {volume !== '' && (
        <Text style={styles.result}>Volume: {volume.toFixed(2)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default VolumeCalculator;
