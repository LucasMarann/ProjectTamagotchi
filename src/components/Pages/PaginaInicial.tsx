import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../PagesStyle/TelaPaginaInicial";

const PaginaInicial = ({ navigation }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    console.log("Logout realizado com sucesso!");
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../../assets/Imagem5.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="sign-out" size={30} color="black" />
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ListarPets")}
          >
            <Text style={styles.buttonText}>Listar Pets</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CadastroPets")}
          >
            <Text style={styles.buttonText}>Cadastrar Pets</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Cobra")}
          >
            <Text style={styles.buttonText}>Cobrinha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PaginaInicial;
