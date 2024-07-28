import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, ImageBackground, Text, View } from "react-native";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants/images";
import { Redirect, router } from "expo-router";
import CustomButton from "../components/CustomButton";

export default function App() {
  const image = require("../assets/images/Android Large - 3bg.png");
  return (
    <ImageBackground source={image}>
      <View className="h-full justify-center">
        {/* <SafeAreaView className="bg-black h-full"> */}
        <StatusBar hidden={true} style="light" />
        {/* <ScrollView> */}
        <View className="w-full justify-end items-center h-5/6 ">
          <CustomButton
            title="Get Started"
            handlePress={() => router.push("/(onboarding)/onb1adddaily")}
            //ContainerStyles="mb-10"
          />
        </View>
        {/* </ScrollView> */}
        {/* </SafeAreaView> */}
      </View>
    </ImageBackground>
  );
}
