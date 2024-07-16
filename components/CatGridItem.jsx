import { View, Text } from 'react-native'
import React from 'react'

const CatGridItem = ({title,value,}) => {
  return (
    
    <View className="basis-1/2 ">
        <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
            <View>
                <Text className="text-white  font-extrabold mt-3 ml-5">{title}</Text>
            </View>
            <View className="w-full self-center rounded-lg items-center">
                <Text className="opacity-80 text-white text-xl mt-6">INR {value}</Text>
            </View>
        </View>
    </View>
    
  )
}

export default CatGridItem