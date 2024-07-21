import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'

const addcategory = () => {
  return (
    <>
    {/* <View className="bg-red-500 h-full"> */}
      <BlurView
        intensity={50}
        tint="dark"
        //className="bg-black h-full"
      >
        <ScrollView className="h-full">
            <View>
                <Text className="text-white">addcategory</Text>
            </View>
        </ScrollView>
      </BlurView>  
    {/* </View> */}
        
    </>
  )
}

export default addcategory