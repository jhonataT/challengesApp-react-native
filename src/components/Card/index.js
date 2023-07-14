import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AwesomeIcons from '@expo/vector-icons/FontAwesome5';
import { styles } from "./styles";

export const Card = ({ name, iconName, handleClick, isAwesomeIcon = false }) => {
    return <TouchableOpacity style={styles.cardContainer} onPress={handleClick}>
        <Text style={styles.cardTitle}>{name}</Text>
        {
            !isAwesomeIcon && 
            <Ionicons
                name={iconName}
                size={32}
                color='#0F9B8E'
            />
        }
        {
            isAwesomeIcon && 
            <AwesomeIcons
                name={iconName}
                size={32}
                color='#0F9B8E'
            />
        }
    </TouchableOpacity>
}