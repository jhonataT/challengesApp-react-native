import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    cardsGroup: {
        flexDirection: 'row',
        gap: 8
    },
    list: {
        flex: 1,
        paddingBottom: 12
    },
    formGroup: {
        flex: 1,
    },
    formTitle: {
        fontSize: 20,
        color: '#fff',
        marginTop: 8
    },
    buttonContainer: {
        backgroundColor: '#47C072',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6,
        marginBottom: 8
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});