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
import { addCategory } from "../../utils/database";
const onb7createcat = () => {
  const image = require("../../assets/images/Android Large - 7bg.png");

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/(onboarding)/onb8allset");
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
              <CatToggles
                label={"Food"}
                onPress={async () => {
                  addCategory("Food", "#EB9010");
                }}
              />
              <CatToggles
                label={"Entertainment"}
                onPress={async () => {
                  addCategory("Entertainment", "#EBD510");
                }}
              />
              <CatToggles
                label={"Travel"}
                onPress={async () => {
                  addCategory("Travel", "#616BF8");
                }}
              />
              <CatToggles
                label={"Health"}
                onPress={async () => {
                  addCategory("Health", "#FD2E6C");
                }}
              />
              <CatToggles
                label={"Education"}
                onPress={async () => {
                  addCategory("Education", "#A6A67B");
                }}
              />
              <CatToggles
                label={"Shopping"}
                onPress={async () => {
                  addCategory("Shopping", "#F608A3");
                }}
              />
              <CatToggles
                label={"Personal"}
                onPress={async () => {
                  addCategory("Personal", "#25F4FF");
                }}
              />
              <CatToggles
                label={"Gifts"}
                onPress={async () => {
                  addCategory("Gifts", "#8411B9");
                }}
              />
              <CatToggles
                label={"Utilities"}
                onPress={async () => {
                  addCategory("Utilities", "#1974E2");
                }}
              />
              <CatToggles
                label={"Pets"}
                onPress={async () => {
                  addCategory("Pets", "#D01D1D");
                }}
              />
              <CatToggles
                label={"Home"}
                onPress={async () => {
                  addCategory("Home", "#1ED4E8");
                }}
              />
              <CatToggles
                label={"Cab"}
                onPress={async () => {
                  addCategory("Cab", "#FFC31F");
                }}
              />
              <CatToggles
                label={"Insurance"}
                onPress={async () => {
                  addCategory("Insurance", "#FFFFFF");
                }}
              />
              <CatToggles
                label={"Savings"}
                onPress={async () => {
                  addCategory("Savings", "#1FFF2A");
                }}
              />
              <CatToggles
                label={"Groceries"}
                onPress={async () => {
                  addCategory("Groceries", "#10EB47");
                }}
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
