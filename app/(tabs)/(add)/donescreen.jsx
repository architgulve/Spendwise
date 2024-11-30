import { View, Text, Pressable, ImageBackground } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { getLastAddedExpense, lastExpense } from "../../../utils/database";
import { useFocusEffect } from "@react-navigation/native";

const DoneScreen = () => {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const fetchData = async () => {
    try {
      const expenses = await getLastAddedExpense();
      setName(expenses[0].name);
      setCategory(expenses[0].category);
      setCost(expenses[0].cost);
      setQuantity(expenses[0].quantity);
    } catch (e) {
      console.log("Error fetching expenses:", e);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <ImageBackground
      source={require("../../../assets/images/Android Large - 7bg.png")}
      className="h-full"
    >
      <SafeAreaView className=" h-full ">
        <View className=" m-3 justify-center ">
          {/* <View className="h-5/6"> */}
          <View className="justify-between h-full w-full  item-ceter">
            <View className=" h-36  justify-between mt-10 space-y-10">
              <View className=" w-full items-center space-y-3">
                <Text className="text-white font-semibold text-2xl">Added {name}</Text>
                {/* <Text className="text-white font-semibold text-2xl">{name}</Text> */}
              <View className=" w-full items-center">
                <Text className="text-white font-semibold opacity-50">
                  to {category}
                </Text>
              </View>
              </View>
              <View className=" w-full items-center">
                <Text className="text-white font-semibold text-6xl">{cost}</Text>
              </View>
            </View>
            <View className="self-center">
              <LottieView
                source={require("../../../assets/animations/Check4.json")}
                autoPlay
                loop={false}
                className="w-[80vw] h-[80vw] mb-10"
              ></LottieView>
            </View>
            <View className=" self-center mb-10">
              <Button handlePress={() => router.push("/(tabs)/home")}>
                <LinearGradient
                  colors={["#00C108", "#0B8700"]}
                  className="rounded-full w-full items-center justify-center"
                >
                  <View className=" p-4 w-[90vw]   rounded-full  justify-center items-center">
                    <Text className="  text-white font-semibold text-xl">
                      Done
                    </Text>
                  </View>
                </LinearGradient>
              </Button>
            </View>
          </View>
        </View>
        {/* </View> */}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default DoneScreen;
