import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
  ImageBackground,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Redirect, router } from "expo-router";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";
// import SkipButton from "../../components/skip";
import BackButton from "../../components/backbutton";
import * as Haptics from "expo-haptics";

const onb4entername = () => {
  const [form, setform] = useState({
    name: "",
  });

  const setUserName = async (name) => {
    try {
      await AsyncStorage.setItem("userName", name);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePress = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    await setUserName(form.name);
    router.push("/(onboarding)/onb5setmonthlybudget");
  };
  const image = require("../../assets/images/Rectangle 55bg.png");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="w-full justify-end items-center "
    >
      <StatusBar hidden={true} style="light" />
      <ImageBackground source={image} className="w-full h-full">
        <View className="w-full h-full justify-center items-center">
          
          <View className=" h-5/6 justify-between items-center ">
            <Animated.View
              className="w-full justify-center items-center"
              entering={FadeInRight.duration(800)}
            >
              <Text className="text-white text-3xl font-bold">
                What's your name?
              </Text>
              <FormField
                placeholder="First Name"
                title="Name"
                value={form.name}
                handleChangeText={(e) => setform({ ...form, name: e })}
                otherStyles="mx-7 mt-20"
                keyboardType="default"
                
                //autocomplete="name"
              />
            </Animated.View>
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
    </KeyboardAvoidingView>
  );
};

export default onb4entername;
