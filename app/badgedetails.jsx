import { View, Text } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Pressable, ScrollView } from "react-native";
import { router } from "expo-router";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Animated from "react-native-reanimated";

const BadgeDetails = () => {
  return (
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
            <Text className="text-white">BadgeDetails</Text>
          </View>
          <Animated.View className="mt-20 items-center" sharedTransitionT>
            <Button>
              <Badge />
            </Button>
          </Animated.View>
        </ScrollView>
      </Pressable>
    </BlurView>
  );
};

export default BadgeDetails;
