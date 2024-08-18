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


const Profile = () => {
  const [userName, setUserName] = useState("Stranger");
  const [userBudget, setUserBudget] = useState('5000');
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

  const [Quantity, setQuantity] = useState(1);
  const Increment = () => {
    setQuantity((prevuserBudget) => prevuserBudget + 500);
  };
  const Decrement = () => {
    setQuantity((prevuserBudget) => prevuserBudget - 500);
  };

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
          <Text className="text-white ">Budget</Text>
          <View>
            <Text className="text-white font-semibold text-2xl">{userBudget}</Text>
            <View className="flex flex-row ">
                  <Button
                    ContainerStyles="bg-[#121212] p-3 rounded-l-xl"
                    handlePress={Decrement}
                  >
                    <Ionicons name="remove-outline" size={24} color="white" />
                  </Button>
                  <View className="bg-[#121212]  p-2 items-center justify-center">
                    <Text className="text-[#ffffff]">{userBudget}</Text>
                  </View>
                  <Button
                    ContainerStyles="bg-[#121212] p-3 rounded-r-xl"
                    handlePress={Increment}
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
