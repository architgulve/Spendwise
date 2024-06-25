// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const OnboardingLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="entername" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
    </Stack>
  )
}

export default OnboardingLayout
