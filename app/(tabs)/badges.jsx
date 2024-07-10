import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { MotiView } from 'moti'

const Badges = () => {
  return (
    <View className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 1000 }}
          className="bg-black h-full"
        >
          <Text className="text-white text-3xl font-bold mt-10">Badges</Text>
        </MotiView>
        {/* <Text className="text-white text-3xl font-bold mt-10">Badges</Text> */}
      </ScrollView>
    </View>
  )
}

export default Badges