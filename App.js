import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SchoolReportScreen } from './src/screens/SchoolReportScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { RandomPhrasesScreen } from './src/screens/RandomPhrasesScreen';
import { FortuneCookieScreen } from './src/screens/FortuneCookieScreen';
import { StopWatchScreen } from './src/screens/StopWatchScreen';
import { ModalScreen } from './src/screens/ModalScreen';
import { AnimationScreen } from './src/screens/AnimationScreen';
import { CEPScreen } from './src/screens/CEPScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ contentStyle:{backgroundColor: "#343635"} }}
        />
        <Stack.Screen
          name='SchoolReport'
          component={SchoolReportScreen}
          options={{ contentStyle:{backgroundColor: "#343635"} }}
        />
        <Stack.Screen
          name='WelcomeMessage'
          component={WelcomeScreen}
          options={{ contentStyle:{backgroundColor: "#343635"} }}
        />
        <Stack.Screen
          name='RandomPhrases'
          component={RandomPhrasesScreen}
          options={{ contentStyle:{backgroundColor: "#343635"} }}
        />
        <Stack.Screen
          name='FortuneCookie'
          component={FortuneCookieScreen}
          options={{ contentStyle:{ backgroundColor: "#343635" } }}
        />
        <Stack.Screen
          name='StopWatch'
          component={StopWatchScreen}
          options={{ contentStyle:{ backgroundColor: "#343635" } }}
        />
        <Stack.Screen
          name='Modal'
          component={ModalScreen}
          options={{ contentStyle:{ backgroundColor: "#343635" } }}
        />
        <Stack.Screen
          name='Animations'
          component={AnimationScreen}
          options={{ contentStyle:{ backgroundColor: "#343635" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider> 
  
}

