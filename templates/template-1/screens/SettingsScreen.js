import React from 'react';
import { Text, View } from 'react-native';

export default function SettingsScreen (){
    return (
        <View className="flex h-screen w-screen bg-white justify-start items-center flex-col">
        <View className="w-full h-[236px] justify-end items-center">
             <Text className='text-black shadow-xl text-5xl'>Settings!</Text>
        </View>
      </View>
    );
}


