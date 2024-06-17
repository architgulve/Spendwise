import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Redirect, router } from "expo-router";
import CustomButton from "../components/CustomButton";
const entername = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <StatusBar hidden={true} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-end items-center min-h-screen">
            <Text className="text-white text-2xl ">Enter Name</Text>
            <CustomButton
              title="Get Started"
              handlePress={() => router.push("/home")}
              ContainerStyles="mb-20"
            />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default entername;
