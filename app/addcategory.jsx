import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import BackButton from "../components/backbutton";

const addcategory = () => {
  return (
    <>
      {/* <View className="bg-red-500 h-full"> */}
      <BlurView
        intensity={90}
        tint="dark"
        experimentalBlurMethod="systemChromeMaterial"
        // style={{ flex: 1 }}
        //className="bg-black h-full"
      >
        <Pressable onPress={() => router.back()}>
          <ScrollView className="h-full">
            <View className="mt-20 items-center">
              <Text className="text-white">addcategory</Text>
              <BackButton />
            </View>
          </ScrollView>
        </Pressable>
      </BlurView>
      {/* </View> */}
    </>
  );
};

export default addcategory;
