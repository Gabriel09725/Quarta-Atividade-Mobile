import { View, Text, StyleSheet } from 'react-native';

const Tela2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.metadeSuperior}>
        <Text style={[styles.textoItem, styles.textoTerceiro]}>TERCEIRO</Text>
        <Text style={[styles.textoItem, styles.textoSegundo]}>SEGUNDO</Text>
        <Text style={[styles.textoItem, styles.textoPrimeiro]}>PRIMEIRO</Text>
      </View>

      <View style={styles.metadeInferior}>
        <Text style={[styles.caixa, styles.caixa3]}>3</Text>
        <Text style={[styles.caixa, styles.caixa2]}>2</Text>
        <Text style={[styles.caixa, styles.caixa1]}>1</Text>
      </View>
    </View>
  );
};

export default Tela2;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 500,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#333',
    overflow: 'hidden',
    marginVertical: 15,
    backgroundColor: '#fff',
  },
  metadeSuperior: {
    flex: 1,
    backgroundColor: '#EDE7F6',
    borderBottomWidth: 3,
    borderColor: '#333',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  textoItem: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  textoTerceiro: {
    color: '#D81B60',
  },
  textoSegundo: {
    color: '#8E24AA', 
  },
  textoPrimeiro: {
    color: '#1E88E5', 
  },
  metadeInferior: {
    flex: 1,
    backgroundColor: '#E0F2F1', 
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  caixa: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#333',
    color: '#FFF',
    textAlign: 'center',
  },
  caixa3: {
    backgroundColor: '#FF9800', 
  },
  caixa2: {
    backgroundColor: '#00BCD4', 
  },
  caixa1: {
    backgroundColor: '#4CAF50', 
  },
});