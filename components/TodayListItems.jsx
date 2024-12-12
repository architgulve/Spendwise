import { View, Text } from 'react-native'
import React from 'react'
import Button from './Button'

const TodayListItems = ({title, value, cat}) => {
  return (
    // <Button>
      <View className="bg-[#1c1c1c] items-center p-4 rounded-2xl my-1">
          <View className="flex flex-row  w-full justify-between items-center">
            <View className='flex flex-row'>
              <View className=''>

              </View>
              <Text className=" text-white">{title}</Text>
            </View>
              <Text className=" text-white">₹ {value}</Text>
              {/* <Text className=" text-white">{cat}</Text> */}
          </View>
      </View>
    // </Button>
  )
}

export default TodayListItems