import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
const Stack=createNativeStackNavigator()


export default function AppNavigation () {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name='Settings' component={SettingsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}



