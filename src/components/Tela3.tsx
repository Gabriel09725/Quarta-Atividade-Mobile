import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

const Tela3 = () => {
  const acaoComprar = () => {
    Alert.alert("Compra", "Redirecionando para a loja...");
  };

  const acaoSair = () => {
    Alert.alert("Sair", "Sessão encerrada!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>BEMVINDO</Text>
        <Text style={styles.subtitulo}>GABRIEL</Text>
      </View>

      <View style={styles.centro}>
        <Pressable style={styles.botaoComprar} onPress={acaoComprar}>
          <Text style={styles.textoBotaoComprar}>COMPRAR</Text>
        </Pressable>
      </View>

      <View style={styles.rodape}>
        <Pressable style={styles.botaoSair} onPress={acaoSair}>
          <Text style={styles.textoBotaoSair}>SAIR</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Tela3;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 500,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#333',
    overflow: 'hidden',
    marginVertical: 15,
    backgroundColor: '#FFF9C4', 
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#3F51B5',
    letterSpacing: 2,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#795548', 
    marginTop: 5,
  },
  centro: {
    alignItems: 'center',
  },
  botaoComprar: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2E7D32',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textoBotaoComprar: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  rodape: {
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoSair: {
    backgroundColor: '#F44336', 
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#C62828',
    elevation: 4,
  },
  textoBotaoSair: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});