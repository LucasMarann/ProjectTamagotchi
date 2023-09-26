import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Switch } from 'react-native';
import CadastroStyle from '../PagesStyle/TelaCadastro';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [apelido, setApelido] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [nomeTamagotchi, setNomeTamagotchi] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confiSenha, setConfiSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const EmailValido = (email) => {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const NomeValido = (name) => {
    return /^[A-Za-z]+$/.test(name);
  };

  const SenhaValida = (password) => {
    return password.length >= 8 && password.length <= 14;
  };

  const Cadastro = () => {
    if (!NomeValido(nome)) {
      Alert.alert('Nome deve conter apenas letras.');
    } else if (!NomeValido(sobrenome)) {
      Alert.alert('Sobrenome deve conter apenas letras.');
    } else if (!dataNascimento.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
      Alert.alert('Data de Nascimento deve estar no formato dd/mm/yyyy.');
    } else if (nomeTamagotchi === '') {
      Alert.alert('Dê um nome ao seu Tamagotchi.');
    } else if (!EmailValido(email)) {
      Alert.alert('Email inválido.');
    } else if (!SenhaValida(senha) || !SenhaValida(confiSenha)) {
      Alert.alert('A senha deve conter entre 8 e 14 caracteres.');
    } else if (senha !== confiSenha) {
      Alert.alert('As senhas não conferem.');
    } else {
      Alert.alert('Cadastro realizado com sucesso!');
      // Redireciona para a página de login novamente
      navigation.navigate('Login');
    }
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
        placeholder="Sobrenome"
        onChangeText={(text) => setSobrenome(text)}
      />
      <TextInput
        style={CadastroStyle.input}
        placeholder="Apelido"
        onChangeText={(text) => setApelido(text)}
      />
      <TextInput
        style={CadastroStyle.input}
        placeholder="Data de Nascimento (dd/mm/yyyy)"
        onChangeText={(text) => setDataNascimento(text)}
      />
      <TextInput
        style={CadastroStyle.input}
        placeholder="Nome do Tamagotchi"
        onChangeText={(text) => setNomeTamagotchi(text)}
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
          onChangeText={(text) => setSenha(text)}
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
          trackColor={{ false: 'gray', true: 'green' }}
          thumbColor={showPassword ? 'green' : 'gray'}
        />
      </View>
      <TouchableOpacity style={CadastroStyle.cadastrarButton} onPress={Cadastro}>
        <Text style={CadastroStyle.cadastrarButtonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastro;
