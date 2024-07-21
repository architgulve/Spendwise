import { View, Text } from 'react-native'
import React from 'react'
import Button from './Button'

const TodayListItems = ({title, value,}) => {
  return (
    // <Button>
      <View className="bg-[#121212] items-center p-4 rounded-2xl my-1">
          <View className="flex flex-row  w-full justify-between items-center">
              <Text className=" text-white">{title}</Text>
              <Text className=" text-white">INR {value}</Text>
          </View>
      </View>
    // </Button>
  )
}

export default TodayListItems