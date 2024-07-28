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
    await setUserName(form.name);
    router.push("/(onboarding)/onb5setmonthlybudget");
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
            <View className="w-full justify-end items-center ">
              <CustomButton
                title="Next"
                handlePress={handlePress}
                //ContainerStyles="mb-10"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default onb4entername;
