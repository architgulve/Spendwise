// import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import { Slot, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="addcategory"
          options={{
            presentation: "transparentModal",
            animation: "fade",
            headerShown: true,
            headerTitle: "Add Category",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile"
          options={{ presentation: "transparentModal", animation: "fade" }}
        />
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;
