import { View, Text } from 'react-native'
import React from 'react'

const Card = ({children, containerStyles}) => {
  return (
    <View className={`bg-[#1c1c1c] rounded-2xl p-4 mt-5 ${containerStyles}`}>
      {children}
    </View>
  )
}

export default Card