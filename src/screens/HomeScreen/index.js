import { View } from "react-native";
import { Card } from "../../components/Card";
import { styles } from "./styles";

export const HomeScreen = ({ navigation }) => {
    return <View style={[styles.homeContainer]}>
        <Card
            name='Boletim escolar'
            iconName='ios-school-outline'
            handleClick={() => navigation.navigate('SchoolReport')}
        />
        <Card
            name='Mensagem de boas-vindas'
            iconName='hand-left-outline'
            handleClick={() => navigation.navigate('WelcomeMessage')}
        />
        <Card
            name='Gerador de frases Aleatórias'
            iconName='ios-text-outline'
            handleClick={() => navigation.navigate('RandomPhrases')}
        />
        <Card
            name='Biscoito da Sorte'
            iconName='cookie-bite'
            isAwesomeIcon
            handleClick={() => navigation.navigate('FortuneCookie')}
        />
        <Card
            name='Cronômetro'
            iconName='ios-alarm'
            handleClick={() => navigation.navigate('StopWatch')}
        />
        <Card
            name='Uso do Modal'
            iconName='ios-open-outline'
            handleClick={() => navigation.navigate('Modal')}
        />
        <Card
            name='Animações'
            iconName='alert-circle-sharp'
            handleClick={() => navigation.navigate('Animations')}
        />
    </View>
}