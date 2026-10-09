import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';

export default function Pessoa() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const mostrarNomeCompleto = () => {
    Alert.alert("Nome Completo", `${nome} ${sobrenome}`);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Cadastro de Pessoa</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o Sobrenome"
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <Pressable style={styles.botao} onPress={mostrarNomeCompleto}>
        <Text style={styles.textoBotao}>Mostrar Nome Completo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 8,
    marginVertical: 4,
  },
  botao: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});