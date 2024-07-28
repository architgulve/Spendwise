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

const onb2sortbycat = () => {
  const image = require("../../assets/images/Android Large - 7bg.png");
  // const ImageBackground = Animated.createAnimatedComponent(ImageBackground);
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
          <CustomButton
            sharedTransitionTag="button"
            title="Next"
            handlePress={() => router.push("/(onboarding)/onb3earnbadges")}
          />
        </View>
      </View>
    </ImageBackground> //ImageBackground>
  );
};

export default onb2sortbycat;
