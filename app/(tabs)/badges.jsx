import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Badge from "../../components/Badge";
import { router } from "expo-router";
import Animated from "react-native-reanimated";
import { useState, useCallback, useDebugValue } from "react";
import { getSumOfMonthExpenses, sumofAllCategories } from "../../utils/database";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Badges = () => {
  const [userBudget, setUserBudget] = useState(5000);
  const [userName, setUserName] = useState("Stranger");
  const [monthlyexpenses, setExpenses] = useState([]);
  

  const fetchData = async () => {
    try {
      const budget = await AsyncStorage.getItem("userBudget");
      if (budget !== null) {
        setUserBudget(budget);
      }
      const name = await AsyncStorage.getItem("userName");
      if (name !== null) {
        setUserName(name);
      const monthlyexpenses = await getSumOfMonthExpenses();
      if(monthlyexpenses !== null){
      setExpenses(monthlyexpenses);
      }
      }
    } catch (e) {
      console.log("Error fetching expenses:", e);
    }
  };

  

  useFocusEffect(
      useCallback(() => {
        fetchData();
      }, [])
    );


  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full ">
      <StatusBar hidden={false} style="light" />
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-col space-y-5">
            <View className="flex-1">
              <Text className="text-white text-2xl font-bold">Badges</Text>
            </View>
            <View className="flex flex-row flex-wrap justify-between ">
              <Animated.View sharedTransitionTag="hatrr">
                <Button
                  handlePress={() => router.push("/badgedetails")}>
                  <Badge />
                </Button>
              </Animated.View>
            </View>
            <View>
              <Text className="text-white text-2xl font-bold">
                {userName}
              </Text>
              <Text className="text-white text-2xl font-bold">
                {userBudget}
              </Text>
              <Text className="text-white text-2xl font-bold">
                {monthlyexpenses}
              </Text>
            </View>
            <View className="bg-white h-[50vw] w-full rounded-2xl flex flex-col justify-between">
              <View>
              <Text className="text-black text-2xl font-bold "> Monthly Rewards</Text>
              </View>
              <View className="flex flex-row space-x-2">
                {monthlyexpenses<userBudget ?
                  <Badge/>
                  :
                  <View className="flex h-[45vw] w-[45vw] bg-black">
                    {/* <Badge/> */}
                    {/* base condition if user doesnt gets a badge */}
                  </View>

                }
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Badges;
