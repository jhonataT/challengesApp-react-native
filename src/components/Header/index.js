import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";

export const Header = ({ title, navigation }) => {
    return <View style={styles.container}>
        <Text style={styles.title}>
            {title}
        </Text>
        <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.navigate('Home')}
        >
            <Feather
                style={styles.icon}
                name='home'
                size={24}
            />
        </TouchableOpacity>
    </View>
}