import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { MotiPressable } from 'moti/interactions'
import { MotiView } from 'moti'
import Button from './Button'

const AddCat = ({handlePress, title, ContainerStyles, textStyles, isLoading}) => {
  return (
    <View className="basis-1/2 ">
        <Button
            handlePress={handlePress}
            title={title}
            ContainerStyles={ContainerStyles}
            textStyles={textStyles}
            isLoading={isLoading}
        >

            <View className="bg-[#701ab600] border-2 opacity-100 border-[#8f00ff] border-dashed w-11/12 self-center items-center justify-center h-32 rounded-lg my-2">
                <View className="w-20 h-20 bg-inherit items-center justify-center">
                        <View className="h-full w-[10px] bg-[#8f00ff] rounded-full"></View>
                        <View className="absolute h-[10px] w-full bg-[#8f00ff] rounded-full"></View>
                </View>

            </View>
        </Button>

    </View>
  )
}

export default AddCat