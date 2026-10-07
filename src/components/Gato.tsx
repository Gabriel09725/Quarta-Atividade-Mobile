
import { Text, View } from "react-native";

const Gato = () => {

    const nome = () => {
        return 'Theo'
    }

    return (
        <View>
            <Text>Gato {()=>nome}</Text>
        </View>
    );
}

export default Gato;