import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Redirect, router } from "expo-router";
import CustomButton from "../components/CustomButton";
const entername = () => {
  return (
    <View className="bg-black h-full">
    {/* <SafeAreaView className="bg-black h-full"> */}
      <StatusBar hidden={false} style="light" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-between items-center min-h-screen">
          <View className="w-full justify-start items-center">
            <Text className="text-white text-3xl mt-32">Enter your Name</Text>
          </View>
          <View className="w-full justify-end items-center ">
            <CustomButton
              title="Done"
              handlePress={() => router.push("/entername")}
              ContainerStyles="mb-20"
            />
          </View>
        </View>
      </ScrollView>
    {/* </SafeAreaView> */}
    </View>
  );
};

export default entername;
