import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ActivityLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index"/>
      {/* <Stack.Screen name="profile" options={{presentation: "transparentModal"}}/> */}
      <Stack.Screen name="categories"/>
    </Stack>
  )
}

export default ActivityLayout