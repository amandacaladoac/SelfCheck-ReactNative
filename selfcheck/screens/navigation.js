import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import CheckinScreen from './checkin';
import PerfilScreen from './perfil';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Checkin') {
            iconName = focused ? 'ios-checkmark-circle' : 'ios-checkmark-circle-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: 'white', 
        tabBarInactiveTintColor: 'white', 
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="Checkin" component={CheckinScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    display: 'flex',
    backgroundColor: '#004A8D',
    borderTopWidth: 0,
  },
});

export default Navigation;
