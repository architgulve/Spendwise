


import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useCallback } from "react";
import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { router } from "expo-router";
import BackButton from "../../../components/backbutton";
import { BlurView } from "expo-blur";
import { addExpense } from "../../../utils/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const Add = () => {
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(0);
  const [category, setCategory] = useState("Grocery");
  const [name, setName] = useState("No Name");
  const [description, setDescription] = useState("No Description");
  const [isEdit, setIsEdit] = useState(false);

  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    setQuantity(prev => Math.max(1, prev - 1)); // Prevent negative quantity
  };
  
  const fetchData = async () => {
    try {
      const savedCost = await AsyncStorage.getItem("tempCost");
      setCost(savedCost ? parseFloat(savedCost) : 0);
    } catch (e) {
      console.log('Error fetching cost:', e);
      setCost(0);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  const addPress = async () => {
    try {
      const numericCost = parseFloat(cost);
      if (isNaN(numericCost)) {
        throw new Error('Invalid cost value');
      }

      await addExpense(
        name,
        numericCost * quantity,
        description,
        new Date(),
        new Date().getMonth() + 1,
        category,
        // quantity
      );
      
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      router.push("/(tabs)/(add)/donescreen");
    } catch (e) {
      console.log('Error adding expense:', e);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  return (
    <SafeAreaView edges={["top"]} className="bg-black h-full">
      <View className="bg-black h-full">
        <StatusBar hidden={false} style="light" animated={true} />
        <ScrollView>
          <View className="m-3 mb-[120px]">
            <View className="flex flex-col space-y-5">
              <View>
                <Text className="text-white text-2xl font-bold">
                  Add Expense
                </Text>
              </View>
              
              {/* Category and Date Section */}
              <View className="flex-1 flex flex-row justify-between">
                <View className="bg-[#121212] rounded-full p-3">
                  <Text className="text-white">Category</Text>
                </View>
                <View className="bg-[#121212] rounded-full p-3">
                  <Text className="text-[#ffffff]">Date</Text>
                </View>
              </View>

              {/* Cost Input Section */}
              <Card containerStyles="flex-1 flex flex-col">
                <View>
                  <Text className="text-[#711AB6] font-bold text-lg">
                    Cost
                  </Text>
                </View>
                <View>
                  <View className="p-3 rounded-2xl">
                    <TextInput
                      className="flex-1 text-[#ffffff] text-7xl h-full text-center items-center justify-center"
                      placeholder="0"
                      value={cost.toString()}
                      placeholderTextColor="#7a7a7a"
                      onChangeText={(text) => {
                        const numValue = parseFloat(text) || 0;
                        setCost(numValue);
                      }}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </Card>

              {/* Quantity Section */}
              <View className="flex-1 flex flex-row mx-2 justify-between items-center">
                <Text className="text-[#711AB6] font-bold text-lg">
                  Quantity
                </Text>
                <View className="flex flex-row">
                  <Button
                    ContainerStyles="bg-[#121212] p-3 rounded-l-xl"
                    handlePress={decrement}
                  >
                    <Ionicons name="remove-outline" size={24} color="white" />
                  </Button>
                  <View className="bg-[#121212] p-2 items-center justify-center">
                    <Text className="text-[#ffffff]">{quantity}</Text>
                  </View>
                  <Button
                    ContainerStyles="bg-[#121212] p-3 rounded-r-xl"
                    handlePress={increment}
                  >
                    <Ionicons name="add-outline" size={24} color="white" />
                  </Button>
                </View>
              </View>

              {/* Total Section */}
              <Card containerStyles="flex-1 flex flex-row justify-between">
                <Text className="text-[#711AB6] font-bold text-lg">Total</Text>
                <Text className="text-white text-lg">₹ {(cost * quantity).toFixed(2)}</Text>
              </Card>

              {/* Name Input Section */}
              <Card className="flex-1 flex flex-col space-y-3">
                <View>
                  <Text className="text-[#711AB6] font-bold text-lg">Name</Text>
                </View>
                <View className="min-w-full h-[60px] p-4 bg-[#000000] rounded-xl items-start">
                  <TextInput
                    className="flex-1 text-white text-base w-full"
                    placeholder="Eg. Clothes"
                    value={name}
                    placeholderTextColor="#7a7a7a"
                    onChangeText={setName}
                    keyboardType="default"
                  />
                </View>
              </Card>

              {/* Description Input Section */}
              <Card containerStyles="flex-1 flex flex-col space-y-3">
                <View>
                  <Text className="text-[#711AB6] font-bold text-lg">
                    Description
                  </Text>
                </View>
                <View className="min-w-full h-[150px] px-4 bg-[#000000] rounded-2xl items-start">
                  <TextInput
                    className="flex-1 text-white text-base h-full w-full"
                    placeholder="Eg. For Birthday"
                    value={description}
                    multiline={true}
                    placeholderTextColor="#7a7a7a"
                    onChangeText={setDescription}
                    keyboardType="default"
                  />
                </View>
              </Card>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Action Buttons */}
        <View className="absolute bottom-10 self-center justify-center rounded-full overflow-hidden">
          <BlurView
            intensity={30}
            experimentalBlurMethod="dimezisBlurView"
            tint="dark"
            style={{
              borderRadius: 20,
            }}
            className="flex flex-row space-x-2 rounded-full p-2 justify-center"
          >
            <View>
              <BackButton />
            </View>
            <View className="justify-center">
              <Button
                ContainerStyles="bg-[#8f00ff] p-3 w-[30vw] rounded-full justify-center items-center"
                handlePress={addPress}
              >
                <Text className="text-white text-lg">Add</Text>
              </Button>
            </View>
          </BlurView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Add;