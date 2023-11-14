import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Cadastro from "../components/Pages/Cadastro";
import PaginaInicial from "../components/Pages/PaginaInicial";
import Game from "../components/Pages/Game";

const Stack = createNativeStackNavigator();

axios.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Cobra" component={Game} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="PaginaInicial" component={PaginaInicial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
