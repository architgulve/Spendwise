// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'


const RootLayout = () => {
  return (
    <>
      <Stack>
          <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen 
            name="addcategory" 
            options={{ 
              presentation: 'modal', 
              headerShown: true,
              headerTitle: 'Add Category',
            }}
          />
      </Stack>
    </>

  )
}

export default RootLayout
