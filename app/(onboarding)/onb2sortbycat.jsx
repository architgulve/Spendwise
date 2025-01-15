import { View, Text, ImageBackground } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Animated, {
  FadeInRight,
  FadeOutLeft,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";
import BackButton from "../../components/backbutton";
import * as Haptics from "expo-haptics";
import LottieView from "lottie-react-native";

const onb2sortbycat = () => {
  const image = require("../../assets/images/Rectangle 55bg.png");

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/(onboarding)/onb3earnbadges");
  };

  return (
    <ImageBackground
      source={image}
      className="w-full h-full justify-center items-center"
    >
      <StatusBar hidden={true} style="light" />
      <View className="w-full h-full justify-center items-center">
        <View className=" h-5/6 justify-between items-center ">
          <View className="w-full justify-center items-center">
            <Animated.Text
              className="text-white text-3xl font-bold "
              entering={FadeInRight.duration(800)}
            >
              Sort by category.
            </Animated.Text>
          </View>
          <LottieView
            source={require("../../assets/animations/onboard2.json")}
            autoPlay
            loop={true}
            className="w-[220vw] h-[140vw] mb-10"
          ></LottieView>
          <View className="w-[90vw] fle flex-row justify-between items-center ">
            <BackButton />
            <Animated.View>
              <CustomButton
                title="Next"
                sharedTransitionTag="button"
                handlePress={handlePress}
                ContainerStyles="w-[72vw]"
              />
            </Animated.View>
          </View>
        </View>
      </View>
    </ImageBackground> //ImageBackground>
  );
};

export default onb2sortbycat;
