import { Text, View, StyleSheet } from "react-native";
import Gato from "@/components/Gato";
import Cachorro from "@/components/Cachorro";
import Funcionario from "@/components/Funcionario";
import Aluno from "@/components/Aluno";
import Multiplicacao from "@/components/Mutiplicacao";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Boa noite.</Text>

      <Gato />
      <Cachorro nome="Orelha" raca="Caramelo" />

      <Funcionario 
        nome="Gabriel Mello" 
        idade={17} 
        setor="Tecnologia da Informacao" 
      />

      <Aluno 
        nome="Gabriel Mello" 
        idade={17} 
        turma="2 Ano B" 
        nota1={8.5} 
        nota2={7.5} 
      />

      <Multiplicacao 
        valor1={2} 
        valor2={4} 
        valor3={5} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});