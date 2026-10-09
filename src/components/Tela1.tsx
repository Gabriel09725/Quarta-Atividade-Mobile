import { View, Text, StyleSheet } from 'react-native';

const Tela1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.metadeSuperior}>
        <View style={styles.caixasTopo}>
          <Text style={[styles.caixa, styles.caixa1]}>1</Text>
          <Text style={[styles.caixa, styles.caixa2]}>2</Text>
          <Text style={[styles.caixa, styles.caixa3]}>3</Text>
        </View>
      </View>

      <View style={styles.metadeInferior}>
        <Text style={styles.textoHello}>HELLO</Text>
        <Text style={styles.textoWorld}>WORLD</Text>
      </View>
    </View>
  );
};

export default Tela1;

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
    backgroundColor: '#E3F2FD', 
    borderBottomWidth: 3,
    borderColor: '#333',
    padding: 15,
  },
  caixasTopo: {
    flexDirection: 'row-reverse', 
    justifyContent: 'flex-start',
    gap: 10,
  },
  caixa: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontWeight: 'bold',
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
    color: '#FFF',
    textAlign: 'center',
  },
  caixa1: {
    backgroundColor: '#FF5252',
  },
  caixa2: {
    backgroundColor: '#FFB300', 
  },
  caixa3: {
    backgroundColor: '#00E676', 
  },
  metadeInferior: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoHello: {
    fontSize: 36,
    fontWeight: '900',
    color: '#6200EE', 
    textShadowColor: '#BB86FC',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  textoWorld: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FF007A', 
    textShadowColor: '#FF80AB',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});