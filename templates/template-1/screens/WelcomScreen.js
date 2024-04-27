import React from 'react';
import {  Text,View } from 'react-native';
import Button from '../components/Button';

export default  function WelcomScreen (){
        return (
          <View className="flex h-screen w-screen bg-white justify-center items-center">
          <View className="flex flex-col h-full w-full">
            <View className="w-full h-[236px] justify-center items-center">
              <Text className="text-black shadow-xl text-5xl">Welcome!</Text>
            </View>
            <Button title={"Press Here"} />
          </View>
        </View>
        
    );
}



