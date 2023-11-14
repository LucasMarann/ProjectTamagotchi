import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Switch,
} from "react-native";
import CadastroStyle from "../PagesStyle/TelaCadastro";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confiSenha, setConfiSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const SenhaValida = (password) => {
    return password.length >= 8 && password.length <= 14;
  };

  const Cadastro = async () => {
    if (nome === "") {
      Alert.alert("Nome deve conter apenas letras.");
    } else if (email === "") {
      Alert.alert("Email inválido.");
    } else if (!SenhaValida(password) || !SenhaValida(confiSenha)) {
      Alert.alert("A senha deve conter entre 8 e 14 caracteres.");
    } else if (password !== confiSenha) {
      Alert.alert("As senhas não conferem.");
    } else {
      try {
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("senha", password);
        const cad = await axios.post(
          `https://tamagochiapi-clpsampedro.b4a.run/register`,
          {
            email,
            password,
          }
        );
        console.log(cad);
        alert("Sucesso");
        navigation.navigate("Login");
      } catch (error) {
        alert("Email ja existente.");
      }
    }
    Alert.alert("Cadastro realizado com sucesso!");
    // Redireciona para a página de login novamente
    navigation.navigate("Login");
  };

  return (
    <View style={CadastroStyle.container}>
      <Text style={CadastroStyle.title}>Cadastro</Text>
      <TextInput
        style={CadastroStyle.input}
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={CadastroStyle.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <View style={CadastroStyle.passwordContainer}>
        <TextInput
          style={CadastroStyle.passwordInput}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={CadastroStyle.passwordInput}
          placeholder="Confirmar Senha"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setConfiSenha(text)}
        />
        <Switch
          value={showPassword}
          onValueChange={() => setShowPassword(!showPassword)}
          trackColor={{ false: "gray", true: "green" }}
          thumbColor={showPassword ? "green" : "gray"}
        />
      </View>
      <TouchableOpacity
        style={CadastroStyle.cadastrarButton}
        onPress={Cadastro}
      >
        <Text style={CadastroStyle.cadastrarButtonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastro;
