import { Text, View, StyleSheet } from "react-native";

type AnaliseCreditoProps = {
  nome: string;
  idade: number;
  rendaAnual: number;
  possuiClt: boolean;
  possuiDivida: boolean;
};

export default function AnaliseCredito(props: AnaliseCreditoProps) {
  let mensagem = "CRÉDITO APROVADO";
  let aprovado = true;
  let percentual = 0;

  if (props.possuiDivida) {
    aprovado = false;
    mensagem = "SEM DIREITO A CRÉDITO";
  } else {
    if (props.idade <= 24) {
      percentual = 0.25;
    } else if (props.idade <= 49) {
      percentual = 0.40;
    } else if (props.idade <= 64) {
      percentual = 0.30;
    } else {
      percentual = 0.15;
    }

    if (!props.possuiClt) {
      percentual = percentual / 2;
    }
  }

  const valorCredito = props.rendaAnual * percentual;

  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{props.nome}</Text>
      <Text>Idade: {props.idade} anos</Text>
      <Text>Renda Anual: R$ {props.rendaAnual.toLocaleString("pt-BR")}</Text>
      <Text>Vínculo CLT: {props.possuiClt ? "Sim" : "Não"}</Text>
      <Text>Possui Dívida: {props.possuiDivida ? "Sim" : "Não"}</Text>
      
      <View style={styles.divisor} />

      <Text style={[styles.status, aprovado ? styles.aprovado : styles.negado]}>
        {mensagem}
      </Text>

      {aprovado && (
        <Text style={styles.detalhe}>
          Crédito: R$ {valorCredito.toLocaleString("pt-BR")} ({percentual * 100}% da renda)
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    width: "90%",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  divisor: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
  },
  status: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  aprovado: {
    color: "green",
  },
  negado: {
    color: "red",
  },
  detalhe: {
    textAlign: "center",
    marginTop: 4,
    fontSize: 14,
  },
});