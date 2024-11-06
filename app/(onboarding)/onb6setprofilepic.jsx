import { View, Text, ImageBackground } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Animated, {
  FadeInRight,
  FadeOutLeft,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";
import Button from "../../components/Button";
import ProfilePic from "../../components/profilepic";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import SkipButton from "../../components/skip";
import BackButton from "../../components/backbutton";
import { useState } from "react";
import * as Haptics from "expo-haptics";
import AsyncStorage from "@react-native-async-storage/async-storage";

const onb6setprofilepic = () => {
  const [profile, setProfile] = useState(require("../../assets/images/9.png"));
  const image = require("../../assets/images/Rectangle 55bg.png");
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/(onboarding)/onb7createcat")
  };
  const profilePress = async (imageNumber,profileAddress) => {
    setProfile(profileAddress);
    try{
      await AsyncStorage.setItem("profilePic", imageNumber);
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    
    <ImageBackground
      source={image}
      className="w-full h-full justify-center items-center"
    >
      <StatusBar hidden={true} style="light" />
      <View className="w-full h-full justify-center items-center ">
        <View className=" h-5/6 justify-between items-center ">
          <View className="w-full justify-center items-center">
            <Animated.Text
              className="text-white text-3xl font-bold "
              entering={FadeInRight.duration(800)}
            >
              Choose Profile Picture.
            </Animated.Text>
          </View>
          <View className="w-full justify-between items-center h-3/5">
            <View className="overflow-hidden rounded-full w-[50vw] h-[50vw]  items-center justify-center">
              {/* <Text className="text-white text-3xl font-bold"> */}
              <ImageBackground source={profile}>
                <View className=" rounded-full w-[50vw] h-[50vw]  items-center justify-center"></View>
              </ImageBackground>
              {/* </Text> */}
              {/* <View>
                <Button handlePress={() => setProfile(2)}>
                  <ProfilePic image={require("../../assets/images/9.png")} />
                </Button>
              </View> */}
            </View>
            <View>
              <View className="flex flex-row  justify-between w-11/12 p-2 ">
                <View>
                <Button handlePress={() => profilePress("9",require("../../assets/images/9.png"))}>
                    <ProfilePic image={require("../../assets/images/9.png")} />
                  </Button>
                </View>
                <View>
                  <Button handlePress={() => profilePress("1",require( "../../assets/images/1.png"))}>
                    <ProfilePic image={require("../../assets/images/1.png")} />
                  </Button>
                </View>

                <View>
                  <Button handlePress={() => profilePress("2",require("../../assets/images/2.png"))}>
                    <ProfilePic image={require("../../assets/images/2.png")} />
                  </Button>
                </View>
                <View>
                  <Button handlePress={() => profilePress("3",require("../../assets/images/3.png"))}>
                    <ProfilePic image={require("../../assets/images/3.png")} />
                  </Button>
                </View>
                <View>
                  <Button handlePress={() => profilePress("4",require("../../assets/images/4.png"))}>
                    <ProfilePic image={require("../../assets/images/4.png")} />
                  </Button>
                </View>
              </View>
              <View className="flex flex-row  justify-between w-11/12 p-2">
                <View>
                  <Button handlePress={() => profilePress("5",require("../../assets/images/5.png"))}>
                    <ProfilePic image={require("../../assets/images/5.png")} />
                  </Button>
                </View>
                <View>
                  <Button handlePress={() => profilePress("6",require("../../assets/images/6.png"))}>
                    <ProfilePic image={require("../../assets/images/6.png")} />
                  </Button>
                </View>
                <View>
                  <Button handlePress={() => profilePress("7",require("../../assets/images/7.png"))}>
                    <ProfilePic image={require("../../assets/images/7.png")} />
                  </Button>
                </View>
                <View>
                  <Button handlePress={() => profilePress("8",require("../../assets/images/8.png"))}>
                    <ProfilePic image={require("../../assets/images/8.png")} />
                  </Button>
                </View>
                <View>
                  <Button handlePress={() => profilePress("10",require("../../assets/images/10.png"))}>
                    <ProfilePic image={require("../../assets/images/10.png")} />
                  </Button>
                </View>
              </View>
            </View>
          </View>

          <View className="w-[90vw] fle flex-row justify-between items-center ">
            <BackButton />
            <CustomButton
              title="Next"
              handlePress={handlePress}
              ContainerStyles="w-[72vw]"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default onb6setprofilepic;
