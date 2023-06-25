import { StatusBar, StyleSheet } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const styles = StyleSheet.create({
    container: {
        paddingTop: statusBarHeight,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    }
});