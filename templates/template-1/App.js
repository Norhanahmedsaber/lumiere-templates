import { StatusBar } from 'expo-status-bar';
import { Text,Image, View, TouchableOpacity } from 'react-native';
import AppTabs from './navigation/AppTabs';
import {useState} from "react"
import AppNavigation from './navigation/appNavigation';
import Button from './Components/Button';


export default function App() {
  const [isOn, setIsOn] = useState(true);
  
  const toggleLamp = () => {
    setIsOn(!isOn);
  };
  return (
    <View className='w-screen h-screen flex justify-center items-center flex-col'>
    {isOn?
    <View className='flex w-full h-full justify-center items-center flex-col bg-black'>
    <TouchableOpacity onPress={toggleLamp}>
    <Image source={require('./assets/light-bulb (1).png')} className='flex h-60 w-60'pressa onClick={toggleLamp}/>  
    </TouchableOpacity>        
        <View className='flex flex-col justify-center items-center'>
        <Text className=' text-sm font-medium font-fellFrench text-white'>click on the lamp!</Text>
          <Text className=' text-4xl font-medium font-fellFrench text-white'>trust the darkness</Text>
        </View>
        <Text className=' text-sm font-medium font-fellFrench text-white text-center'>this is a react native template with{'\n   '}expo and nativeWind configured </Text>
    </View>:
    <View className='flex w-full h-full justify-center items-center flex-col bg-white'>
    <TouchableOpacity onPress={toggleLamp}>    
    <Image  source={require('./assets/light-bulb.png')} className='flex h-60 w-60 hover:cursor-pointer'onClick={toggleLamp}/>
    </TouchableOpacity> 
        <View className='flex flex-col justify-center items-center'>  
          <Text className=' text-sm font-medium font-fellFrench text-black'>click on the lamp!</Text>
          <Text className=' text-4xl font-medium font-fellFrench text-black'>lumière templates</Text>
        </View>
        <Text className=' text-sm font-medium font-fellFrench text-black text-center'>this is a react native template with{'\n   '}expo and nativeWind configured </Text>
    </View>
  } 
  </View>
  );
}
