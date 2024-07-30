import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Button from "./Button";

const BackButton = () => {
  return (
    <Button handlePress={() => router.back()}>
      <View className="justify-center items-center rounded-full p-4 bg-[#ffffff24]">
        <Ionicons name="arrow-back-outline" size={30} color="white" />
      </View>
    </Button>
  );
};

export default BackButton;
