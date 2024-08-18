import React from "react";
import { View } from 'react-native';
import { Slot, Stack, usePathname } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
import { initDatabase } from "../utils/database";
initDatabase().catch((e) => {
  console.log(e);
});
const DisableSwipeGesture = ({ children }) => {
  const gesture = Gesture.Simultaneous(
    Gesture.Native(),
    Gesture.Pan()
      .onStart(() => true)
  );

  return (
    <GestureDetector gesture={gesture}>
      <View style={{ flex: 1 }}>{children}</View>
    </GestureDetector>
  );
};

const RootLayout = () => {
  const pathname = usePathname();

  // List of routes where you want to disable the swipe gesture
  // const disableSwipeRoutes = ['/(tabs)', '/addcategory', '/profile'];

  // const shouldDisableSwipe = disableSwipeRoutes.some(route => pathname.startsWith(route));

  // const LayoutWrapper = shouldDisableSwipe ? DisableSwipeGesture : React.Fragment;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <LayoutWrapper> */}
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="addcategory"
              options={{
                presentation: "modal",
                animation: "fade",
                headerTitle: "Add Category",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="profile"
              options={{ presentation: "transparentModal", animation: "fade", }}
            />
            <Stack.Screen
              name="badgedetails"
              options={{ presentation: "transparentModal", animation: "fade" }}
            />
          </Stack>
        </SafeAreaProvider>
      {/* </LayoutWrapper> */}
    </GestureHandlerRootView>
  );
};

export default RootLayout;