import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import * as Haptics from "expo-haptics";
import { MotiView } from "moti";
import { MotiPressable } from "moti/interactions";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { router } from "expo-router";
import BackButton from "../../../components/backbutton";
import { BlurView } from "expo-blur";

const Add = () => {
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const handleDeletePress = () => {
    setIsDeleteMode(true);
    //Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleCancelPress = () => {
    setIsDeleteMode(false);
  };
  const [Quantity, setQuantity] = useState(1);
  const Increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const Decrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const [Cost, setCost] = useState(0);
  const addPress = async () => {
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.push("/(tabs)/(add)/donescreen");
  };
  const deletePress = async () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  };

  return (
    <SafeAreaView edges={["top"]} className="bg-black h-full ">
      <View className="bg-black h-full ">
        <StatusBar hidden={false} style="light" animated={true} />
        <ScrollView>
          <View className="m-3 mb-[120px]">
            <View className="flex flex-col space-y-5">
              <View>
                <Text className="text-white text-2xl font-bold">
                  Add Expense
                </Text>
              </View>
              <View className="flex-1 flex flex-row justify-between">
                <View className="bg-[#121212] rounded-full p-3">
                  <Text className="text-white">Category</Text>
                </View>
                <View className="bg-[#121212] rounded-full p-3">
                  <Text className="text-[#ffffff]">Date</Text>
                </View>
              </View>
              <Card containerStyles="flex-1 flex flex-col">
                <View>
                  <Text className="text-[#711AB6] font-bold text-lg ">
                    Cost
                  </Text>
                </View>
                <View>
                  <View className={"p-3 rounded-2xl "}>
                    <TextInput
                      className="flex-1 text-[#ffffff] text-7xl h-full text-center items-center justify-center"
                      placeholder="0"
                      value={Cost}
                      placeholderTextColor="#7a7a7a"
                      onChangeText={(e) => setCost(e)}
                      //onFocus={() => setIsFocused(true)}
                      //onBlur={() => setIsFocused(false)}
                      keyboardType="number-pad"
                      //autoComplete='given-name'
                      //{...props}
                    />
                  </View>
                </View>
              </Card>
              <View className="flex-1 flex flex-row mx-2 justify-between items-center">
                <Text className="text-[#711AB6] font-bold  text-lg">
                  Quantity
                </Text>
                <View className="flex flex-row ">
                  <Button
                    ContainerStyles="bg-[#121212] p-3 rounded-l-xl"
                    handlePress={Decrement}
                  >
                    <Ionicons name="remove-outline" size={24} color="white" />
                  </Button>
                  <View className="bg-[#121212]  p-2 items-center justify-center">
                    <Text className="text-[#ffffff]">{Quantity}</Text>
                  </View>
                  <Button
                    ContainerStyles="bg-[#121212] p-3 rounded-r-xl"
                    handlePress={Increment}
                  >
                    <Ionicons name="add-outline" size={24} color="white" />
                  </Button>
                </View>
              </View>
              <Card containerStyles="flex-1 flex flex-row justify-between">
                <Text className="text-[#711AB6] font-bold text-lg">Total</Text>
                <Text className="text-white text-lg">₹ {Cost * Quantity}</Text>
              </Card>
              <Card className="flex-1 flex flex-col space-y-3">
                <View>
                  <Text className="text-[#711AB6] font-bold text-lg">Name</Text>
                </View>
                <View
                  className={
                    " min-w-full h-[60px] p-4 bg-[#000000] rounded-xl items-start "
                  }
                >
                  <TextInput
                    className="flex-1 text-white text-base w-full"
                    placeholder="Eg. Clothes"
                    //value={value}
                    placeholderTextColor="#7a7a7a"
                    //onChangeText={handleChangeText}
                    // onFocus={() => setIsFocused(true)}
                    // onBlur={() => setIsFocused(false)}
                    keyboardType="default"
                    //autoComplete='given-name'
                    //{...props}
                  />
                </View>
              </Card>

              <Card containerStyles="flex-1 flex flex-col space-y-3">
                <View>
                  <Text className="text-[#711AB6] font-bold text-lg">
                    Description
                  </Text>
                </View>
                <View
                  className={
                    " min-w-full h-[150px] px-4 bg-[#000000] rounded-2xl items-start "
                  }
                >
                  <TextInput
                    className="flex-1 text-white text-base h-full w-full "
                    placeholder="Eg. For Birthday"
                    //value={value}
                    multiline={true}
                    placeholderTextColor="#7a7a7a"
                    //onChangeText={handleChangeText}
                    // onFocus={() => setIsFocused(true)}
                    // onBlur={() => setIsFocused(false)}
                    keyboardType="default"
                    //autoComplete='given-name'
                    //{...props}
                  />
                </View>
              </Card>
            </View>
          </View>
        </ScrollView>
        <View className="absolute bottom-10 self-center rounded-full overflow-hidden ">
          <BlurView
            intensity={30}
            experimentalBlurMethod="systemChromeMaterial"
            tint="light"
            style={{
              borderRadius: 20,
            }}
            className="flex flex-row space-x-2 rounded-full p-2"
          >
            <View>
              <BackButton />
            </View>
            <View>
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
