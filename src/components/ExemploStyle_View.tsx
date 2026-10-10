import { StyleSheet, View, Text } from "react-native";

const ExemploStyle_View = () => {
    return (
        <View style={styles_local.wrapperPrincipal}>
            <View style={styles_local.container_fixo}>
                <Text style={styles_local.tituloSecao}>Container Fixo (Row-Reverse)</Text>
                <View style={styles_local.linhaBlocos}>
                    <View style={[styles_local.fundo_azul, styles_local.tamanho_50, styles_local.borda]} />
                    <View style={[styles_local.fundo_laranja, styles_local.tamanho_50, styles_local.borda]} />
                    <View style={[styles_local.fundo_verde, styles_local.tamanho_50, styles_local.borda]} />
                </View>
            </View>
            <View style={styles_local.container_flex}>
                <Text style={styles_local.tituloSecao}>Container Flex (Proporções)</Text>
                <View style={styles_local.linhaBlocosFlex}>
                    <View style={[styles_local.fundo_azul, styles_local.flex_pequeno, styles_local.borda]} />
                    <View style={[styles_local.fundo_laranja, styles_local.flex_grande, styles_local.borda]} />
                    <View style={[styles_local.fundo_verde, styles_local.flex_grande, styles_local.borda]} />
                </View>
            </View>
        </View>
    );
}

export default ExemploStyle_View;

const styles_local = StyleSheet.create({
    wrapperPrincipal: {
        width: "100%",
        padding: 10,
    },
    tituloSecao: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    container_fixo: {
        backgroundColor: '#F8F9FA',
        borderRadius: 12,
        padding: 15,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#E9ECEF',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    container_flex: {
        backgroundColor: '#FFFDE7',
        borderRadius: 12,
        padding: 15,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#FFEE58',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    linhaBlocos: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
    },
    linhaBlocosFlex: {
        flexDirection: 'row',
        height: 60,
    },
    fundo_azul: {
        backgroundColor: '#4A90E2', 
    },
    fundo_laranja: {
        backgroundColor: '#F5A623', 
    },
    fundo_verde: {
        backgroundColor: '#7ED321', 
    },
    tamanho_50: {
        width: 45,
        height: 45,
    },
    flex_pequeno: {
        flex: 1,
    },
    flex_grande: {
        flex: 3, 
    },
    borda: {
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 8, 
    }
});