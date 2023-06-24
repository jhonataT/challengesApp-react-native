import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";

export const Card = ({ name, iconName, handleClick }) => {
    return <TouchableOpacity style={styles.cardContainer} onPress={handleClick}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Ionicons
            name={iconName}
            size={32}
            color='#0F9B8E'
        />
    </TouchableOpacity>
}