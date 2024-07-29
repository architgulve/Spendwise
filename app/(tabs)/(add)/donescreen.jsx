import { View, Text, Pressable, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

const DoneScreen = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/Android Large - 7bg.png")}
      className="h-full"
    >
      <SafeAreaView className=" h-full ">
        <View className=" m-3 justify-center ">
          {/* <View className="h-5/6"> */}
          <View className="justify-between h-full w-full  item-ceter">
            <View className=" h-36  justify-between mt-10 ">
              <View className=" w-full items-center ">
                <Text className="text-white font-semibold text-2xl">
                  added
                </Text>
              </View>
              <View className=" w-full items-center">
                <Text className="text-white font-semibold text-6xl">800 </Text>
              </View>
            </View>
            <View className="self-center">
              <LottieView
                source={require("../../../assets/animations/Check4.json")}
                autoPlay
                loop={false}
                className="w-96 h-96 mb-10"
              ></LottieView>
            </View>
            <View className=" self-center mb-10">
              <Button handlePress={() => router.push("/(tabs)/home")}>
                <LinearGradient
                  colors={["#00C108", "#0B8700"]}
                  className="rounded-full w-full items-center justify-center"
                >
                  <View className=" p-4 w-[90vw]   rounded-full  justify-center items-center">
                    <Text className="  text-white font-semibold text-xl">
                      Done
                    </Text>
                  </View>
                </LinearGradient>
              </Button>
            </View>
          </View>
        </View>
        {/* </View> */}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default DoneScreen;
