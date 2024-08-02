import { View, Text, Image } from "react-native";
import React from "react";
import Button from "./Button";
const Badge = () => {
  return (
    <View className="w-[45vw] h-[45vw] justify-center items-center">
      <Image
        source={require("../assets/images/Group 2.png")}
        resizeMode="contain"
        className="w-[40vw] h-[40vw]"
      />
    </View>
  );
};

export default Badge;
