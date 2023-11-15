import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import axios from 'axios';
import styles from '../PagesStyle/TelaCadastroPet';
import IconSelector from '../PagesComponents/Icons';

const CadastroPets = ({ navigation }) => {
  const [nomePet, setNomePet] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleConfirmar = async () => {
    const petData = { name: nomePet};
    try {
      const response = await axios.post('https://tamagochiapi-clpsampedro.b4a.run/pet', petData);
      Alert.alert('Pet cadastrado com sucesso!');

      navigation.navigate('PaginaInicial');
    } catch (error) {
      console.log("Erro ao cadastra o pet", error);
      Alert.alert('Erro ao cadastrar o pet!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Pet"
        value={nomePet}
        onChangeText={setNomePet}
      />
      {/* <IconSelector onSelect={setSelectedIcon} /> */}

      <TouchableOpacity style={styles.buttonConfirmar} onPress={handleConfirmar}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCancelar} onPress={() => navigation.navigate('PaginaInicial')}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CadastroPets;
