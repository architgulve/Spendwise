import { View, Text } from 'react-native'
import React from 'react'
import Card from './Card'
import {Ionicons} from '@expo/vector-icons'
import Button from './Button'


const SettingsComp = ({icon, color, title}) => {
  return (
    <Button>
      <Card containerStyles="flex flex-row justify-between space-x-4 items-center mt-8 p-4">
        <View className="flex flex-row justify-between w-full">
          <View className="flex flex-row items-center gap-3 ">
            <Ionicons 
              name={icon} 
              size={24} 
              color={color} 
            />
            <Text className="text-white text font">{title}</Text>
          </View>
          <View className="">
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </View>
        </View>
      </Card>
    </Button>
  )
}

export default SettingsComp