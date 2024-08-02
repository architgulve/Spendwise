import { ScrollView, View, Text, ImageBackground } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { Redirect, router } from "expo-router";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import Animated, {
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";

// const { Value, timing } = Animated;

const onb1adddaily = () => {
  const image = require("../../assets/images/Android Large - 7bg.png");
  const [isblurred, setisblurred] = React.useState(false);
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/(onboarding)/onb2sortbycat");
  };

  return (
    <ImageBackground
      // blurRadius={10}
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
              Add Expenses.
            </Animated.Text>
          </View>
          <Animated.View>
            <CustomButton
              sharedTransitionTag="button"
              title="Next"
              handlePress={handlePress}
            />
          </Animated.View>
          {isblurred && (
            <BlurView className=" absolute w-screen h-screen"></BlurView>
          )}
        </View>
      </View>
    </ImageBackground> //ImageBackground>
  );
};

export default onb1adddaily;
