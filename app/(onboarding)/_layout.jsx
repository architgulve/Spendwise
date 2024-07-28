// import { StyleSheet, Text, View } from 'react-native'
import React from "react";
import { Slot, Stack } from "expo-router";
import { ImageBackground } from "react-native";

const OnboardingLayout = () => {
  const image = require("../../assets/images/Rectangle 55bg.png");
  return (
    // <ImageBackground source={image}>
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
        animationDuration: 200,
        animationTypeForReplace: "push",
      }}
    >
      <Stack.Screen name="onb1adddaily" />
      <Stack.Screen name="onb2sortbycat" />
      <Stack.Screen name="onb3earnbadges" />
      <Stack.Screen name="onb4entername" />
      <Stack.Screen name="onb5setmonthlybudget" />
      <Stack.Screen name="onb6setprofilepic" />
      <Stack.Screen name="onb7createcat" />
      <Stack.Screen name="onb8allset" />
    </Stack>
    // </ImageBackground>
  );
};

export default OnboardingLayout;
