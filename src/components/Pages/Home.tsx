import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStyle from '../PagesStyle/TelaHome';


const Home = ({navigation}) => {

  const Start = () => {
    // Redireciona para a página de login
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
        source={require('../../assets/imagem3.jpg')} 
        style={HomeStyle.backgroundImage}>
      <View style={HomeStyle.container}>
        <Text style={HomeStyle.title}>Let's Start</Text>
        <TouchableOpacity style={HomeStyle.startButton} onPress={Start}>
          <Text style={HomeStyle.startButtonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
