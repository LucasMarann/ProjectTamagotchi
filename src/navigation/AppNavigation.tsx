import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Pages/Home';
import Login from '../components/Pages/Login';
import Cadastro from '../components/Pages/Cadastro';
import PaginaInicial from '../components/Pages/PaginaInicial';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="PaginaInicial" component={PaginaInicial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
