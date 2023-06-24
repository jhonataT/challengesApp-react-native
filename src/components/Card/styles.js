import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        paddingVertical: 20,

        borderBottomWidth: 1,
        borderColor: '#efe',
        marginBottom: 12,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardTitle: {
        fontSize: 18,
        color: '#efe',
    }
});