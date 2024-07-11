import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

const Activity = () => {
  return (
    <View className="bg-black h-full">
      <ScrollView>
        <SafeAreaView>
          <Text className="text-white text-3xl font-bold mt-10">Activity</Text>
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}

export default Activity