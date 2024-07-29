import { View, Text, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { router } from "expo-router";

const Profile = () => {
  return (
    <>
      <BlurView
        intensity={90}
        tint="dark"
        experimentalBlurMethod="systemChromeMaterial"
        className="h-full"
      >
        <Pressable onPress={() => router.back()} className="h-full">
          <Text>Profile</Text>
        </Pressable>
      </BlurView>
    </>
  );
};

export default Profile;
