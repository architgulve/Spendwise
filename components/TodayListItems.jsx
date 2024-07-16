import { View, Text } from 'react-native'
import React from 'react'

const TodayListItems = ({title, value,}) => {
  return (
    <View className="bg-[#121212] items-center p-4 rounded-2xl my-1">
        <View className="flex flex-row  w-full justify-between items-center">
            <Text className=" text-white">{title}</Text>
            <Text className=" text-white">INR {value}</Text>
        </View>
    </View>
  )
}

export default TodayListItems