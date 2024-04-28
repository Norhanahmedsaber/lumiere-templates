import React from 'react';
import { TouchableOpacity, Text, Alert, View } from 'react-native';

export default  function Button  ({ title, onPress })  {
  const handlePress = () => {
    Alert.alert('Button Clicked', 'React native template with expo');
    // Call the onPress function if it's provided
    onPress && onPress();
  };

  return (
    <TouchableOpacity className=" h-full w-full flex justify-center items-center " onPress={handlePress}>
     <View className="border bg-black w-[325px] h-[62px] justify-center items-center rounded">
     <Text className="text-white">{title}</Text>
     </View>
    </TouchableOpacity>
  );
};

