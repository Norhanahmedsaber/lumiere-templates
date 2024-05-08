import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import WelcomeScreen from '../screens/WelcomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab=createBottomTabNavigator()


export default function AppTabs () {
    return (
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Welcome'
          screenOptions={{
            activeTintColor: 'gray',
            inactiveTintColor: 'blue', 
            labelStyle: {
              fontSize: 16, 
              fontWeight: 'bold', 
            },
            style: {
              backgroundColor: 'lightgray', 
            },
          }}
        >
          <Tab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarLabel: 'Welcome', 
              tabBarIcon: ({ color, size }) => ( 
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings', 
              tabBarIcon: ({ color, size }) => ( 
                <Ionicons name="settings" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
}





