import { TouchableOpacity , Text, Pressable, View} from 'react-native'
import React from 'react'
import { MotiPressable } from 'moti/interactions'
import { MotiView } from 'moti'


const CustomButton = ({handlePress, title, ContainerStyles, textStyles, isLoading}) => {
  return (
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
        disabled={isLoading}
      >
        <View 
          className={`bg-[#711AB6] rounded-full min-h-[60px] min-w-[200px] items-center justify-center
            ${ContainerStyles}
            ${isLoading ? 'opacity-70' : ''}`}
        >
          <Text className={`text-white text-2xl p-4 ${textStyles}`}>
              {title}
          </Text>
        </View>
      </MotiPressable>
  )
}

export default CustomButton