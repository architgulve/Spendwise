import { View, Text, ScrollView } from 'react-native'
import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <View className="bg-black h-full ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <Text className="text-white text-3xl font-bold mt-10 mx-3">Hello! User</Text>
        <View className="w-full justify-start items-center bg-[#711AB6] w-11/12 h-36 rounded-2xl mt-5 self-center ">
          <Text className="text-white text-3xl self-start mx-3 mt-3 ">INR 0.00</Text>
          <Text className="text-white self-start mx-3 ">of 5000</Text>
          <View className="w-11/12 h-10 bg-black justify-center items-center mt-3 rounded-full ">
          </View>
        </View>
        <View>
          <Text className="text-white text-2xl font-bold mt-10 mx-3 mt-5 mb-3">Today</Text>
          <View className="justify-start items-start mx-5 space-y-2">
            <Text className="text-lg text-yellow-300">Burgers</Text>
            <Text className="text-lg text-red-300">Pizza</Text>
            <Text className="text-lg text-blue-300">Fries</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home