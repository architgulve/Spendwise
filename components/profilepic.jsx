import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Image } from "react-native";

const ProfilePic = ({ image }) => {
  return (
    <View className="overflow-hidden rounded-full h-[15vw] w-[15vw]">
    <ImageBackground source={image}>
      <View className={`rounded-full h-[15vw] w-[15vw]`}>
        {/* <Image source={image} resizeMode="center" /> */}
      </View>
    </ImageBackground>
    </View>
  );
};

export default ProfilePic;
