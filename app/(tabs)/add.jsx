import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { MotiView } from 'moti'

const Add = () => {
  return (
    <View className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'timing', duration: 1000 }}
          className="bg-black h-full"
        >
          <Text className="text-white text-3xl font-bold mt-10">Addition</Text>

          <View className="bg-[#540495] w-11/12  rounded-2xl p-4 self-center flex-1">
                
            <View style={{ flexDirection: 'column', justifyContent: 'center',
                alignContent: 'center' }}>
             
                <Text className="text-white">Income</Text>
                <Text className="text-white">INR 0.00</Text>
              </View>
              </View>

        </MotiView>
        {/* <Text className="text-white text-3xl font-bold mt-10">Badges</Text> */}
        
      </ScrollView>
    </View>
  )
}

export default Add



