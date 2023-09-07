import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Header } from "../../components/Header"
import { useState } from "react"
import axios from "axios"

export const FortuneCookieScreen = ({ navigation }) => {
    const [isCookieOpen, setIsCookieOpen] = useState(false);
    const [currentPhrase, setCurrentPhrase] = useState('');

    const handleOpenCookie = async () => {
        setIsCookieOpen(true);
        const response = await axios.get('https://buddha-api.com/api/random');

        if(response.data && response.data.text) {
            setCurrentPhrase(response.data.text);
        }
    }

    const handleResetCookie = () => {
        setIsCookieOpen(false);
        setCurrentPhrase('');
    }

    return <View style={styles.container}>
        <Header
            title='Biscoito da Sorte'
            navigation={navigation}
        />
        <View style={styles.content}>
            <Image
                source={!isCookieOpen ? 
                    require('../../../assets/images/biscoito.png') : 
                    require('../../../assets/images/biscoitoAberto.png')
                }
                style={styles.image}
            />
            <Text style={styles.phrase}>{currentPhrase}</Text>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} onPress={() => !isCookieOpen ? handleOpenCookie() : handleResetCookie()}>
                    <Text style={styles.title}>{isCookieOpen ? 'Outro Biscoito' : 'Abrir Biscoito'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}