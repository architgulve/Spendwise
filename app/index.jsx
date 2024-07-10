import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, ImageBackground, Text, View } from "react-native";
import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { MotiView } from "moti";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants/images";
import { Redirect, router } from "expo-router";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <View className="bg-black h-full">
      {/* <SafeAreaView className="bg-black h-full"> */}
      <StatusBar hidden={false} style="light" />
      <ScrollView>
        <ImageBackground source={images.splashscreegraphic}>
          <View className="w-full justify-end items-center min-h-screen ">
            {/* <MotiView
              from={{
                shadowOpacity: 0.5
              }}
              animate={{ 
                shadowOpacity: 1 
              }}
              transition={{ 
                type: "timing",  
                duration: 1000 ,
                loop : true,
              }}
              className="shadow-lg shadow-[#711AB6]"
            > */}
              <CustomButton
                title="Get Started"
                handlePress={() => router.push("/(onboarding)/entername")}
                ContainerStyles="mb-20"
              />
            {/* </MotiView> */}
          </View>
        </ImageBackground>
      </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
}
