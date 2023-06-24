import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/HomeScreen';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SchoolReportScreen } from './src/screens/SchoolReportScreen';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'red'
  },
};

export default function App() {
  return <NavigationContainer theme={MyTheme}>
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
    </Stack.Navigator>
  </NavigationContainer>
}

