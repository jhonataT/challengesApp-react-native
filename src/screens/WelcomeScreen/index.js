import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './styles';

export const WelcomeScreen = ({ navigation }) => {
    const [hasMessage, setHasMessage] = useState(false);

    return <View style={styles.container}>
        <Header
            title='Boas-vindas'
            navigation={navigation}
        />
        <View style={styles.content}>
            {hasMessage && <Text style={styles.title}>Bem-vindo!</Text>}
            <TouchableOpacity
                onPress={() => setHasMessage(!hasMessage)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    {hasMessage ? 'Remover mensagem' : 'Boas-vindas'}
                </Text>
            </TouchableOpacity>
        </View>
    </View>
}