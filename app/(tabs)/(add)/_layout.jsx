import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AddLayout = () => {
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: "fade", }}
      >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="donescreen"
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}

export default AddLayout