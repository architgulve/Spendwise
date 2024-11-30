import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, ImageBackground, Text, View } from "react-native";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { images } from "../constants/images";
import { Redirect, router } from "expo-router";
import CustomButton from "../components/CustomButton";
import * as Haptics from "expo-haptics";
import { initDatabase } from "../utils/database";


export default function App() {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/(onboarding)/onb1adddaily");
  };
  const image = require("../assets/images/Android Large - 3bg.png");
  return (
    // <NavigationContainer>
    <ImageBackground source={image}>
      <View className="h-full justify-center">
        {/* <SafeAreaView className="bg-black h-full"> */}
        <StatusBar hidden={true} style="light" />
        {/* <ScrollView> */}
        <View className="w-full justify-end items-center h-5/6 ">
          <CustomButton
            title="Get Started"
            handlePress={handlePress}
            //ContainerStyles="mb-10"
          />
        </View>
        {/* </ScrollView> */}
        {/* </SafeAreaView> */}
      </View>
    </ImageBackground>
    // </NavigationContainer>
  );
}
