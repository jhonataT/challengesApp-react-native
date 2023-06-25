import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

const phrases = [
    'Frase 1',
    'Frase 2',
    'Frase 3',
    'Frase 4',
    'Frase 5',
    'Frase 6',
    'Frase 7',
    'Frase 8',
    'Frase 9',
    'Frase 10',
];

export const RandomPhrasesScreen = ({ navigation }) => {
    const [currentPhrase, setCurrentPhrase] = useState(0)

    return <View style={styles.container}>
        <Header
            title='Frases Aleatórias'
            navigation={navigation}
        />
        <View style={styles.content}>
            <Text style={styles.title}>{phrases[currentPhrase] || phrases[0]}</Text>
            <TouchableOpacity
                onPress={() => setCurrentPhrase(Math.floor(Math.random() * (9 - 0) + 0))}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Gerar uma Nova frase
                </Text>
            </TouchableOpacity>
        </View>
    </View>
}