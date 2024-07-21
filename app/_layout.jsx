// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const RootLayout = () => {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>

  )
}

export default RootLayout
