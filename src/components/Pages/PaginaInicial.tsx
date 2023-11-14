import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import List from "../PagesComponents/List";
import styles from "../PagesStyle/TelaPaginaInicial";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PaginaInicial = ({ navigation }) => {
  const [listPets, setListPets] = useState({});
  const [menuVisible, setMenuVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarPets();
  }, []);

  const listarPets = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://tamagochiapi-clpsampedro.b4a.run/pets"
      );
      setLoading(false);
      console.log("Lista de pets:", response);
      // setListPets(response.data?.pets || []);
    } catch (error) {
      console.error("Erro na requisição da API", error);
    }
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  };

  const playGame = () => {
    navigation.navigate("Cobra");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Icon name="user" style={styles.userIcon} />
        </TouchableOpacity>
        {menuVisible && (
          <View style={styles.userMenu}>
            <Icon name="user" style={styles.userIcon} />
            <Text style={styles.userName}>Nome do usuario</Text>
            <TouchableOpacity onPress={playGame}>
              <Text style={styles.userName}>Jogar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.logoutButton}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View>{/* <List data={listPets} /> */}</View>
    </View>
  );
};

export default PaginaInicial;
