import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    content: {
        alignItems: 'center',
        paddingVertical: 24
    },
    stopWatchContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    stopWatch: {
        position: 'absolute',
        top: '50%',
    },
    text: {
        color: "#ffffff",
        fontSize: 32,
        fontFamily: 'Ubuntu_400Regular'
    },
    buttonGroup: {
        paddingVertical: 40 
    },
    button: {
        width: 220,
        backgroundColor: '#47C072',
        borderRadius: 6,
        
        paddingVertical: 12,

        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#343635'
    },
    buttonDanger: {
        backgroundColor: '#F37055'
    },
    historicContainer: {
        
    }
});
