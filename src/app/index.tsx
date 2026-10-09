import { Text, View, StyleSheet, TextInput, Image, Pressable, Alert, Switch } from "react-native";
import Gato from "@/components/Gato";
import Cachorro from "@/components/Cachorro";
import Funcionario from "@/components/Funcionario";
import Aluno from "@/components/Aluno";
import Multiplicacao from "@/components/Mutiplicacao";
import Pessoa from "@/components/Pessoa";
import { useState } from "react";
import ExemploStyle_Text from "@/components/ExemploStyle_Text";
import ExemploStyle_View from "@/components/ExemploStyle_View";
import Tela1 from "@/components/Tela1";
import Tela2 from "@/components/Tela2";
import Tela3 from "@/components/Tela3";



export default function Index() {
  const [campo, setCampo] = useState('');
  const [ativado, setAtivado] = useState(false);

  const acionarPopUp = () => {
    Alert.alert("Outro botão");
  };

  return (
    <View style={styles.container}>

      {/* <Pessoa />

      <Pressable onPress={acionarPopUp}>
        <Text>Boa noite.</Text>
      </Pressable>

      <Pressable
        onPress={(evento) => {
          Alert.alert(`Campo: ${campo}`);
          console.log(evento);
        }}>
        <Text>Boa noite.</Text>
      </Pressable>

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

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjK3cRbdtQTCkW_ifOEjQ9ddExudLPwwBE-MViVRBLtYJbOf7zWTnHnHR&s=10'
        }}
        style={{ width: 200, height: 200, resizeMode: "stretch" }}
      />

      <Multiplicacao valor1={2} valor2={4} valor3={5} />

      <TextInput
        placeholder="Digite algo.ggg.."
        value={campo}
        onChangeText={(text) => { setCampo(text) }}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
      />

      <Switch
        value={ativado}
        onValueChange={(valor) => { setAtivado(valor) }}
      />
      <ExemploStyle_Text />
      <ExemploStyle_View/> */}
      {/* <Tela1/> */}
      {/* <Tela2/> */}
      <Tela3/>
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