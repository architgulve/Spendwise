import { View, Text } from 'react-native'
import React, { Children } from 'react'
import { MotiPressable } from 'moti/interactions'
//import { Ionicons } from '@expo/vector-icons'

const Button = ({handlePress, title, ContainerStyles, textStyles, isLoading, children}) => {
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
        //disabled={isLoading}
        //className={`${ContainerStyles}`}
      >
      <View className={`${ContainerStyles}`}>
        {children}
      </View>
      </MotiPressable>
  )
}

export default Button