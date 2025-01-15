import { View, Text, ImageBackground } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInRight } from "react-native-reanimated";
import BackButton from "../../components/backbutton";
import * as Haptics from "expo-haptics";
import LottieView from "lottie-react-native";
const onb8allset = () => {
  const image = require("../../assets/images/Rectangle 55bg.png");
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/(tabs)/home");
  };
  return (
    <ImageBackground
      source={image}
      className="w-full h-full justify-center items-center"
    >
      <StatusBar hidden={true} style="light" animated={true} />
      <View className="w-full h-full justify-center items-center ">
        <View className=" h-5/6 justify-between items-center ">
          {/* <View className="w-full justify-center items-center"> */}
          {/* <Animated.Text
              className="text-white text-3xl font-bold "
              entering={FadeInRight.duration(800)}
            >
              All Set!
            </Animated.Text> */}
          {/* </View> */}
          <LottieView
            source={require("../../assets/animations/onboard_allset.json")}
            autoPlay
            loop={false}
            speed={2}
            className="w-[160vw] h-[160vw] mb-10"
          ></LottieView>
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

export default onb8allset;
