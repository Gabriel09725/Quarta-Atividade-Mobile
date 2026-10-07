import { Text, View } from "react-native";

type CachorroProsps = {
    nome: string;
    raca?: string;
}

export default function Cachorro(props: CachorroProsps) {
    return (
    <View>
        <Text>Cachorro: {props.nome}</Text>
        <Text>Raca: {props.raca}</Text>
    </View>
    );
}