import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from "axios";
import List from "../PagesComponents/List";
import styles from "../PagesStyle/TelaPaginaInicial"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

const PaginaInicial = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
      async function fetchData() {
        const token = await AsyncStorage.getItem("token");
      try {
        const response = await axios.get("https://tamagochiapi-clpsampedro.b4a.run/pets", 
        {
            headers: {
                "x-access-token": token,
        }});
        setUserData(response);
      } catch (error) {
        console.error("Erro na requisição da API", error);
      }
    }

    fetchData();
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = async () => {
        await AsyncStorage.removeItem("token");
        navigation.navigate("Login");
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
                <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.logoutButton}>Logout</Text>
                </TouchableOpacity>
            </View>
            )}
        </View>
        <View >
            <List data = {userData}/>
        </View>
    </View>

  );
};

export default PaginaInicial;
