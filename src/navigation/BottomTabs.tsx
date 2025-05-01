import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import Placeholder from '../screens/PlaceholderScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#ff5c45',
        tabBarInactiveTintColor: '#ccc',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Pedidos':
              iconName = 'receipt-outline';
              break;
            case 'Buscar':
              iconName = 'search-outline';
              break;
            case 'Notificações':
              iconName = 'notifications-outline';
              break;
            case 'Perfil':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pedidos" component={Placeholder} />
      <Tab.Screen name="Buscar" component={Placeholder} />
      <Tab.Screen name="Notificações" component={Placeholder} />
      <Tab.Screen name="Perfil" component={Placeholder} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
