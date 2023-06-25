import { StatusBar,  View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { CardInfo } from "../../components/CardInfo";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64; 

export const SchoolReportScreen = () => {
    return <View style={styles.container}>
        <Header title='Boletim escolar'/>
        <View style={styles.cardsGroup}>
            <CardInfo title='Matemática' subtitle='0 - Reprovado'/>
            <CardInfo title='Física' subtitle='0 - Reprovado'/>
        </View>
        <View style={styles.cardsGroup}>
            <CardInfo title='Português' subtitle='0 - Reprovado'/>
        </View>
    </View>
}