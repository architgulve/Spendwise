import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({title, value, handleChangeText, placeholder, keyboardType, otherStyles, ...props}) => {
  return (
    <View className={`space-y-2  ${otherStyles}`}>
      {/* <Text className="text-white">{title}</Text> */}
      {/* <View className="bg-[#1d1d1d] rounded-lg h-16 w-1/2 justify-center items-start"> */}
      <View className={" min-w-full h-[60px] px-4 bg-[#1d1d1d] rounded-2xl focus:shadow-glow items-start"}>
        <TextInput 
            className="flex-1 text-white text-base w-full"
            placeholder={placeholder}
            value={value}
            placeholderTextColor="#9e9e9e"
            onChangeText={handleChangeText}
        />
      </View>
    </View>
  )
}

export default FormField