import { View, Text } from "react-native";
import React from "react";
import Button from "./Button";
import { BlurView } from "expo-blur";
import { router } from "expo-router";

const SkipButton = () => {
  return (
    <Button
      // handlePress={() => router.back()}
    >
      
        <View className="justify-center items-center rounded-full w-20 p-3 bg-[#ffffff4a]">
          <Text className="text-white ">Skip</Text>
        </View>

    </Button>
  );
};

export default SkipButton;
