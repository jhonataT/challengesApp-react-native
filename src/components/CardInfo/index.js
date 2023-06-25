import { Text, View } from "react-native"
import { styles } from "./styles"

export const CardInfo = ({ title, subtitle }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
}