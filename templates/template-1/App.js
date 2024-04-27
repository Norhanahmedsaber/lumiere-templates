import React from 'react';
import { Text,Image, View } from 'react-native';
import AppTabs from './navigation/AppTabs';
import AppNavigation from './navigation/AppNavigation';
import Button from './components/Button';


export default function App() {
  return (
/*     <View className="h-screen w-screen justify-center items-center">
    <Image className="w-[180px] h-[174px]" source={require('./assets/template.png')} />
    <Text className="text-black text-xl flex items-center"> this is a react native template with{'\n   '}expo and nativeWind configured </Text>
    </View>   */
  /*  <Button title={"Press Here"} />   */
    <AppTabs/>
  );
}
