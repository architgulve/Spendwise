import { View, Text, ImageBackground } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInRight } from "react-native-reanimated";
import BackButton from "../../components/backbutton";
import Button from "../../components/Button";
import { MotiPressable } from "moti/interactions";
import CatToggles from "../../components/CatToggles";
import * as Haptics from "expo-haptics";
const onb7createcat = () => {
  const image = require("../../assets/images/Android Large - 7bg.png");

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/(onboarding)/onb8allset")
  };
  return (
    <ImageBackground
      source={image}
      className="w-full h-full justify-center items-center"
    >
      <StatusBar hidden={true} style="light" />
      <View className="w-full h-full justify-center items-center ">
        <View className=" h-5/6 justify-between items-center ">
          <View className="w-full justify-center items-center space-y-3">
            <Animated.Text
              className="text-white text-3xl font-bold "
              entering={FadeInRight.duration(800)}
            >
              Create Categories.
            </Animated.Text>
            <View>
              <Text className="text-white text-sm opacity-50 mt-2">
                Select atleast 3 categories
              </Text>
            </View>
            <View className="w-[90vw] flex flex-row flex-wrap items-center justify-center">
              <CatToggles label={"Food"} />
              <CatToggles label={"Entertainment"} />
              <CatToggles label={"Travel"} />
              <CatToggles label={"Health"} />
              <CatToggles label={"Education"} />
              <CatToggles label={"Shopping"} />
              <CatToggles label={"Personal"} />
              <CatToggles label={"Gifts"} />
              <CatToggles label={"Utilities"} />
              <CatToggles label={"Pets"} />
              <CatToggles label={"Home"} />
              <CatToggles label={"Transportation"} />
              <CatToggles label={"Insurance"} />
              <CatToggles label={"Savings"} />
              <CatToggles
                label={"Groceries"}
                // onPress={() => router.push("/(onboarding)/onb8allset")}
              />
              <CatToggles label={"Other"} />
            </View>
          </View>
          <View className="w-[90vw] fle flex-row justify-between items-center ">
            <BackButton />
            <CustomButton
              title="Next"
              handlePress={handlePress}
              ContainerStyles="w-[72vw]"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default onb7createcat;
