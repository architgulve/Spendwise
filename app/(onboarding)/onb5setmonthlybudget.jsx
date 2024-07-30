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
import SkipButton from "../../components/skip";
import BackButton from "../../components/backbutton";

const onb5setmonthlybudget = () => {
  // const [budget, setBudget] = useState(5000);
  const [form, setform] = useState({
    budget: "",
  });

  const setUserBudget = async (budget) => {
    try {
      await AsyncStorage.setItem("userBudget", budget);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePress = async () => {
    await setUserBudget(form.budget);
    router.push("/(onboarding)/onb6setprofilepic");
  };
  const image = require("../../assets/images/Android Large - 7bg.png");
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
                Set your monthly budget.
              </Text>
              <FormField
                placeholder={`Default: 5000`}
                title="Name"
                value={form.budget}
                handleChangeText={(e) => setform({ ...form, budget: e })}
                otherStyles="mx-7 mt-20"
                keyboardType="numeric"
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

export default onb5setmonthlybudget;
