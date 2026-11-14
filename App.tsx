import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import CustomNavigationBar from './components/CustomNavigationBar';

const Stack = createStackNavigator();

export default function App() {
  return (
     <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{ header: (props) => <CustomNavigationBar {...props} />
          }} >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
};