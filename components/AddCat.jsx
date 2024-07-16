import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { MotiPressable } from 'moti/interactions'
import { MotiView } from 'moti'

const AddCat = ({handlePress, title, ContainerStyles, textStyles, isLoading}) => {
  return (
    <View className="basis-1/2 ">
        <MotiPressable 
        onPress={handlePress} 
        animate={({ pressed }) => {
          'worklet'
      
          return {
            opacity:  pressed ? 0.5 : 1,
            scale: pressed ? 0.95 : 1,
          }
        }}
        transition={{
          type: 'timing',
          duration: 100,
        }}
        //disabled={isLoading}
      >
            <View className="bg-inherit border-2 opacity-100 border-[#711AB6] border-dashed w-11/12 self-center items-center justify-center h-32 rounded-lg my-2">
                <View className="w-20 h-20 bg-inherit items-center justify-center">
                        <View className="h-full w-[10px] bg-[#711AB6] rounded-full"></View>
                        <View className="absolute h-[10px] w-full bg-[#711AB6] rounded-full"></View>
                </View>

            </View>
        </MotiPressable>
    </View>
  )
}

export default AddCat