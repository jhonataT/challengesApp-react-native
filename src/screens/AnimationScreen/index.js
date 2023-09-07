import Animated, {
  useSharedValue,
  withTiming,
  withSpring,
  withRepeat,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { View, TouchableOpacity } from "react-native"
import { styles } from './styles';
import { Text } from 'react-native';
import { Header } from '../../components/Header';

export const AnimationScreen = ({ navigation }) => {
  const randomWidth = useSharedValue(10);
  const offset = useSharedValue(0);

  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(offset.value * 255) }],
    };
  });

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withRepeat(withTiming(randomWidth.value, config), 6, true),
    };
  });

  return (
    <View style={styles.container}>
      <Header
        title='Animações'
        navigation={navigation}
      />
        <Animated.View style={[styles.box, defaultSpringStyles]} />
        <Animated.View style={[styles.box, style]} />
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => (offset.value = Math.random())}
          >
            <Text style={styles.buttonTitle}>Sequencial</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              randomWidth.value = Math.random() * 350;
            }}
          >
            <Text style={styles.buttonTitle}>Loop</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}