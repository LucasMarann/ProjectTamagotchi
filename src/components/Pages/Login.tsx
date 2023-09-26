import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Switch } from 'react-native';
import styles from '../PagesStyle/TelaLogin'
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const SeePassword = () => {
    setShowPassword(!showPassword);
  };

  const Login = async () => {
    if (username === '' || password === '') {
      Alert.alert('Por favor, preencha todos os campos.');
    } else if (username === 'lucas' && password === '@1234') {
      try {
        const response = await axios.post(
          `https://tamagochiapi-clpsampedro.b4a.run/login`,
          {
            username,
            password,
          }
        );
        const token = response.data.token;
        await AsyncStorage.setItem('token', token);
        navigation.navigate('PaginaInicial');
      } catch (error) {
        Alert.alert('Usuário ou senha incorretos!');
    }
  } 
}

  const SignUp = () => {
    console.log('Redirecionar para a tela de cadastro');
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/imagem1.jpg')}
      >
      <Text style={styles.title}>Seu Tamagotchi sentiu sua falta!</Text>
        <View style={styles.backgroundBox}>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            onChangeText={(text) => setUsername(text)}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Senha"
              secureTextEntry={!showPassword}
              onChangeText={(text) => setPassword(text)}
            />
            <Switch
              value={showPassword}
              onValueChange={SeePassword}
              trackColor={{ false: 'gray', true: 'green' }}
              thumbColor={showPassword ? 'green' : 'gray'}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={Login}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={SignUp}>
            < Text style={styles.loginButtonText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
