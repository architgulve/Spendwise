import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import BackButton from "../../components/backbutton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { Ionicons } from "@expo/vector-icons";
import ProfilePic from "../../components/profilepic";
import { useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const EditProfile = () => {
  const defaultProfile = require("../../assets/images/9.png");
  const profileLog = {
    1: require("../../assets/images/1.png"),
    2: require("../../assets/images/2.png"),
    3: require("../../assets/images/3.png"),
    4: require("../../assets/images/4.png"),
    5: require("../../assets/images/5.png"),
    6: require("../../assets/images/6.png"),
    7: require("../../assets/images/7.png"),
    8: require("../../assets/images/8.png"),
    9: require("../../assets/images/9.png"),
    10: require("../../assets/images/10.png"),
  };

  const [image, setImage] = useState(defaultProfile);
  const [profile, setProfile] = useState(require("../../assets/images/9.png"));
  const [userBudget, setUserBudget] = useState(5000);

  const handlePress = async () => {
    try {
      const imageNumber = await AsyncStorage.getItem("profilePic");
      if (imageNumber !== null) {
        setImage(profileLog[imageNumber]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const profilePress = async (imageNumber, profileAddress) => {
    setProfile(profileAddress);
    try {
      await AsyncStorage.setItem("profilePic", imageNumber);
    } catch (e) {
      console.log(e);
    }
  };

  // Load initial budget
  useEffect(() => {
    const fetchUserBudget = async () => {
      try {
        const budget = await AsyncStorage.getItem("userBudget");
        if (budget !== null) {
          const b = Number(budget);
          setUserBudget(b);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserBudget();
  }, []); // Empty dependency array for initial load only

  // Save budget whenever it changes
  const updateBudget = async (newBudget) => {
    try {
      await AsyncStorage.setItem("userBudget", newBudget.toString());
      setUserBudget(newBudget);
    } catch (e) {
      console.log(e);
    }
  };

  const incrementBudget = () => {
    const newBudget = userBudget + 500;
    updateBudget(newBudget);
  };

  const decrementBudget = () => {
    const newBudget = Math.max(500, userBudget - 500); // Prevents going below 500
    updateBudget(newBudget);
  };

  useFocusEffect(
    useCallback(() => {
      handlePress();
    }, [])
  );

  return (
    <View className="h-full p-3 bg-black">
      <View className="mt-5 items-center p-5 justify-between flex-row">
        <Text className="text-white text-2xl">Profile</Text>
        <Button handlePress={() => router.back()}>
          <View className="justify-center items-center rounded-full p-3 bg-[#ffffff24]">
            <Text className="text-white text-lg">Done</Text>
          </View>
        </Button>
      </View>
      <View>
        <View className="items-center">
          <View className="mt-5 items-center">
            <Image
              source={profile}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
            <View className="">
              <View className="flex-row p-3 bg-[#1c1c1c] rounded-2xl">
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  className="space-x-1"
                >
                  <View>
                    <Button
                      handlePress={() =>
                        profilePress("9", require("../../assets/images/9.png"))
                      }
                    >
                      <ProfilePic
                        image={require("../../assets/images/9.png")}
                      />
                    </Button>
                  </View>
                  <View>
                    <Button
                      handlePress={() =>
                        profilePress("1", require("../../assets/images/1.png"))
                      }
                    >
                      <ProfilePic
                        image={require("../../assets/images/1.png")}
                      />
                    </Button>
                  </View>
                  <View>
                    <Button
                      handlePress={() =>
                        profilePress("2", require("../../assets/images/2.png"))
                      }
                    >
                      <ProfilePic
                        image={require("../../assets/images/2.png")}
                      />
                    </Button>
                  </View>
                  <View>
                    <Button
                      handlePress={() =>
                        profilePress("3", require("../../assets/images/3.png"))
                      }
                    >
                      <ProfilePic
                        image={require("../../assets/images/3.png")}
                      />
                    </Button>
                  </View>
                  <View>
                    <Button
                      handlePress={() =>
                        profilePress("4", require("../../assets/images/4.png"))
                      }
                    >
                      <ProfilePic
                        image={require("../../assets/images/4.png")}
                      />
                    </Button>
                  </View>
                  <View>
                    <Button
                      handlePress={() =>
                        profilePress("5", require("../../assets/images/5.png"))
                      }
                    >
                      <ProfilePic
                        image={require("../../assets/images/5.png")}
                      />
                    </Button>
                  </View>
                  <View>
                    <Button
                      handlePress={() =>
                        profilePress("6", require("../../assets/images/6.png"))
                      }
                    >
                      <ProfilePic
                        image={require("../../assets/images/6.png")}
                      />
                    </Button>
                  </View>
                  <View>
                    <Button
                      handlePress={() =>
                        profilePress("7", require("../../assets/images/7.png"))
                      }
                    >
                      <ProfilePic
                        image={require("../../assets/images/7.png")}
                      />
                    </Button>
                  </View>
                  <View>
                    <Button
                      handlePress={() =>
                        profilePress("8", require("../../assets/images/8.png"))
                      }
                    >
                      <ProfilePic
                        image={require("../../assets/images/8.png")}
                      />
                    </Button>
                  </View>
                  <View>
                    <Button
                      handlePress={() =>
                        profilePress(
                          "10",
                          require("../../assets/images/10.png")
                        )
                      }
                    >
                      <ProfilePic
                        image={require("../../assets/images/10.png")}
                      />
                    </Button>
                  </View>
                </ScrollView>
              </View>
            </View>
            <View>
              <Card>
                <View className="flex flex-row items-center justify-between w-full">
                  <View className="flex flex-row items-center justify-between w-full">
                    <Text className="text-white">Budget</Text>
                    <View className="flex flex-row">
                      <Button
                        ContainerStyles="bg-[#121212] p-3 rounded-l-xl"
                        handlePress={decrementBudget}
                      >
                        <Ionicons
                          name="remove-outline"
                          size={24}
                          color="white"
                        />
                      </Button>
                      <View className="bg-[#121212] p-2 items-center justify-center">
                        <Text className="text-[#ffffff]">{userBudget}</Text>
                      </View>
                      <Button
                        ContainerStyles="bg-[#121212] p-3 rounded-r-xl"
                        handlePress={incrementBudget}
                      >
                        <Ionicons name="add-outline" size={24} color="white" />
                      </Button>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
