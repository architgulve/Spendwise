import { TouchableOpacity, Text, Pressable, View } from "react-native";
import React from "react";
import { MotiPressable } from "moti/interactions";
import { MotiView } from "moti";
import { LinearGradient } from "expo-linear-gradient";

const CustomButton = ({
  handlePress,
  title,
  ContainerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <MotiPressable
      onPress={handlePress}
      animate={({ pressed }) => {
        "worklet";

        return {
          opacity: pressed ? 0.5 : 1,
          scale: pressed ? 0.95 : 1,
        };
      }}
      transition={{
        type: "timing",
        duration: 100,
      }}
      disabled={isLoading}
      //className="w-full"
    >
      <View
        className={`rounded-full w-[90vw]
            ${ContainerStyles}
            ${isLoading ? "opacity-70" : ""}`}
      >
        <LinearGradient
          colors={["#8F00FF", "#4C0088"]}
          className="rounded-full w-full items-center p-3 justify-center"
        >
          <Text className={`text-white text-lg  ${textStyles}`}>
            {title}
          </Text>
        </LinearGradient>
      </View>
    </MotiPressable>
  );
};

export default CustomButton;
