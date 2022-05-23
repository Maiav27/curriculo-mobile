import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Perfil from './src/pages/Perfil'
import Habilidades from  './src/pages/Habilidades' 
import AtividadesExtra from './src/pages/AtividadesExtra';
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator>
        <Tab.Screen name='Perfil'  component={Perfil} />
        <Tab.Screen name='Habilidades'  component={Habilidades} />
        <Tab.Screen name='Atividades Extras'  component={AtividadesExtra} />
     </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
