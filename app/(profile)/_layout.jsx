import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'


const ProfileLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name="index"/>
          {/* <Stack.Screen name="profile" options={{presentation: "transparentModal"}}/> */}
          <Stack.Screen name="ep"/>
        </Stack>
  )
}

export default ProfileLayout