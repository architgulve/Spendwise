import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, ImageBackground, Text, View } from "react-native";
//import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants/images";
import { Redirect, router } from "expo-router";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <View className="bg-black h-full">
      {/* <SafeAreaView className="bg-black h-full"> */}
      <StatusBar hidden={false} style="light" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <ImageBackground source={images.splashscreegraphic}>
          <View className="w-full justify-end items-center min-h-screen ">
            <CustomButton
              title="Get Started"
              handlePress={() => router.push("/entername")}
              ContainerStyles="mb-20"
            />
          </View>
        </ImageBackground>
      </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
}
