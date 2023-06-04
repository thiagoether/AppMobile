import * as React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign, Feather  } from '@expo/vector-icons';
import Box from './Telas/Box';
import Duto from './Telas/Duto';
import Base from './Telas/Base';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // componentização
    <NavigationContainer theme={DarkTheme}>    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Calcular Caixa') {
              iconName = 'box';
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === 'Calcular Duto') {
              iconName = 'menuunfold';
              return <AntDesign name={iconName} size={size} color={color} />;
            } else if (route.name === 'Histórico') {
              iconName = 'ios-list-sharp';
              return <Ionicons name={iconName} size={size} color={color} />;
            } 
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red', // Alterando a cor da barra de navegação ativa
          inactiveTintColor: 'gray', //Alterando a cor da barra de navegação inativa
          tabBarStyle:[
          {
            display: "flex"
          },
          null
        ]               
        }}       
        >        
        <Tab.Screen name="Calcular Caixa" component={Box} /> 
        <Tab.Screen name="Calcular Duto" component={Duto} />
        <Tab.Screen name="Histórico" component={Base} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
