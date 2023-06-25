import { StatusBar, StyleSheet } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const styles = StyleSheet.create({
    homeContainer: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: statusBarHeight,
    }
});