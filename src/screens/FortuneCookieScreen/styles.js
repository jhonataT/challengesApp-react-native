import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 22
    },
    image: {
        width: 220,
        height: 220,
    },
    phrase: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 24,
    },
    buttonGroup: {
        marginTop: 32
    },
    button: {
        width: 220,
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 24,

        borderRadius: 220,

        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
});