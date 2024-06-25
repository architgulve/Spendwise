import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Badges = () => {
  return (
    <View className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Text className="text-white text-3xl font-bold mt-10">Badges</Text>
      </ScrollView>
    </View>
  )
}

export default Badges