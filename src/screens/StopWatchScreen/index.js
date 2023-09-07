import { Image, Text, TouchableOpacity, View } from "react-native";
import { Stopwatch } from 'react-native-stopwatch-timer';
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { useRef, useState } from "react";

export const StopWatchScreen = ({ navigation }) => {
    const timer = useRef(null);
    const [timerStatus, setTimerStatus] = useState('reset');
    const [historic, setHistoric] = useState([]);
    const [formattedTime, setFormattedTime] = useState(0);

    const startTimer = () => setTimerStatus('start');
    const resetTimer = () => {
        setTimerStatus('reset');
        setFormattedTime(0);
    }

    return <View style={styles.container}>
        <Header
            title='Cronômetro'
            navigation={navigation}
        />
        <View style={styles.content}>
            <View style={styles.stopWatchContainer}>
                <Image
                    source={require('../../../assets/images/crono.png')}
                />
                <View style={styles.stopWatch}>
                    <Stopwatch
                        laps
                        msecs={true}
                        startTime={formattedTime}
                        start={timerStatus === 'start'}
                        reset={timerStatus === 'reset'}
                        options={styles}
                        ref={timer}
                    />
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        timerStatus !== 'reset' && styles.buttonDanger
                    ]}
                    onPress={() => timerStatus === 'start' ? resetTimer() : startTimer()}
                >
                    <Text style={styles.title}>{timerStatus === 'start' ? 'Parar' : 'Iniciar'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.historicContainer}>
                {
                    Array.isArray(historic) && historic.map(item => <View style={styles.historicRow}>
                        <Text>Segundos: </Text>
                        <Text>{item}</Text>
                    </View>)
                }
            </View>
        </View>
    </View>
}