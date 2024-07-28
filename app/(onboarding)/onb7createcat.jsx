import { View, Text, ImageBackground } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInRight } from "react-native-reanimated";
const onb7createcat = () => {
  const image = require("../../assets/images/Android Large - 7bg.png");
  return (
    <ImageBackground
      source={image}
      className="w-full h-full justify-center items-center"
    >
      <StatusBar hidden={true} style="light" />
      <View className="w-full h-full justify-center items-center ">
        <View className=" h-5/6 justify-between items-center ">
          <View className="w-full justify-center items-center">
            <Animated.Text
              className="text-white text-3xl font-bold "
              entering={FadeInRight.duration(800)}
            >
              Create Categories.
            </Animated.Text>
          </View>
          <CustomButton
            title="Next"
            handlePress={() => router.push("/(onboarding)/onb8allset")}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default onb7createcat;
