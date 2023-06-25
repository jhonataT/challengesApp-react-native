import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12
    },
    title: {
        fontSize: 32,
        color: '#fff',
    },
    button: {
        width: 240,
        backgroundColor: '#47C072',

        padding: 12,
        borderRadius: 4,

        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});