import { View, Text, Pressable } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
// import ProgressCard from "../components/ProgressCard";
import BackButton from "../components/backbutton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from 'react';
import Card from "../components/Card";
import Button from "../components/Button";
import { Ionicons } from '@expo/vector-icons';
import defaultProfile from '../assets/images/1.png';

const Profile = () => {
  const [userName, setUserName] = useState("Stranger");
  useEffect(() => {
    const fetchUserName = async () => { 
      try {
        const name = await AsyncStorage.getItem("userName");
        if (name !== null) {
          setUserName(name);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserName();
  }, []);

  const [userBudget, setUserBudget] = useState(5000);
  useEffect(() => {
    const fetchUserBudget = async () => {
      try {
        const budget = await AsyncStorage.getItem("userBudget");
        if (budget !== null) {
          setUserBudget(budget);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserBudget();
  })

  const incrementBudget = () => {
    setUserBudget(prevBudget => prevBudget + 500);
  };
  
  const decrementBudget = () => {
    setUserBudget(prevBudget => Math.max(500, prevBudget - 500)); // Prevents going below 500
  };

  const [userProfile, setUserProfile] = useState({image: defaultProfile});
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await AsyncStorage.getItem("userProfile");
        if (profile !== null) {
          const parsedProfile = JSON.parse(profile);
          
          // Get the image from our mapping, or use default if not found
          const imagePath = parsedProfile.image && profileImages[parsedProfile.image]
            ? profileImages[parsedProfile.image]
            : defaultProfile;
  
          setUserProfile({
            ...parsedProfile,
            image: imagePath
          });
        }
      }
      catch (e) {
        console.log(e);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <View className="h-full p-3 bg-black">
      <Text>Profile</Text>
      <View>
        <View className="mt-5 items-center">
          <View className="flex flex-row justify-between items-center w-full">
            <BackButton />
            <Text className="text-white font-semibold text-2xl">Edit</Text>
          </View>
          <View className="w-full items-center">
            <View className="bg-white h-[50vw] w-[50vw] rounded-full"></View>
            <View>
              <Text className="text-white font-semibold text-2xl">{userName}</Text>
            </View>
          </View>
          {/* <ProgressCard /> */}
          
          <Card >
          <View className="flex flex-row items-center justify-between w-full">
          <View className="flex flex-row items-center justify-between w-full ">
          <Text className="text-white ">Budget</Text>
            <Text className="text-white font-semibold text-2xl">{userBudget}</Text>
            <View className="flex flex-row ">
                  <Button
                    ContainerStyles="bg-[#121212] p-3 rounded-l-xl"
                    handlePress={decrementBudget}
                  >
                    <Ionicons name="remove-outline" size={24} color="white" />
                  </Button>
                  <View className="bg-[#121212]  p-2 items-center justify-center">
                    <Text className="text-[#ffffff]">{userBudget.toLocaleString()}</Text>
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
  );
};

export default Profile;
