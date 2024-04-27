import React from 'react';
import { Image,Text, View } from 'react-native';

export default function SettingsScreen (){
    return (
        <View className="flex h-screen w-screen bg-white justify-start items-center flex-col">
          <View className="w-full h-[236px] justify-end items-center">
             <Text className='text-black  shadow-xl text-5xl'>Settings!</Text>
          </View>
          <View className="h-screen w-screen justify-start items-center">
            <Image className="w-[180px] h-[174px]" source={require('../assets/template.png')} />
            <Text className="text-black text-xl flex items-center"> this is a react native template with{'\n   '}expo and nativeWind configured </Text> 
          </View>
        </View>

    );
}


