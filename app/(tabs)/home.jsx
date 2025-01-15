import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback, useRef } from "react";
import * as Haptics from "expo-haptics";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import TodayListItems from "../../components/TodayListItems";
import CatGridItem from "../../components/CatGridItem";
import AddCat from "../../components/AddCat";
import { router, useSegments } from "expo-router";
// import ProgressCard from "../../components/ProgressCard";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { initDatabase, summonthExpenses } from "../../utils/database";
import { getTodayExpenses, getSumOfMonthExpenses } from "../../utils/database";
import Animated from "react-native-reanimated";
import { useFocusEffect } from "expo-router";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { LinearGradient } from "expo-linear-gradient";
import { BarChart } from "react-native-gifted-charts";
import { Dimensions } from "react-native";
import { Image } from "react-native";
import { getAllCategories } from "../../utils/database";
import { sumofCategory } from "../../utils/database";
import { topThreeCatogories } from "../../utils/database";
import { getAllExpenses } from "../../utils/database";

initDatabase();
const Home = () => {
  const [userName, setUserName] = useState("Stranger");
  const [userBudget, setUserBudget] = useState("5000");
  const [monthexpense, setMonthExpense] = useState(0);
  const [Expenses, setExpenses] = useState([]);
  const screenWidth = Dimensions.get("window").width;

  // useEffect(() => {
  //   const fetchUserName = async () => {
  //     try {
  //       const name = await AsyncStorage.getItem("userName");
  //       if (name !== null) {
  //         setUserName(name);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchUserName();
  // }, []);

  //profilepic
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

  const [top3, setTop3] = useState([]);

  const loadTopCategories = async () => {
    try {
      const categories = await topThreeCatogories();
      setTop3(categories);
    } catch (error) {
      console.error("Error loading top categories:", error);
    }
  };

  const [image, setImage] = useState(defaultProfile);
  useFocusEffect(
    useCallback(() => {
      const handlePress2 = async () => {
        try {
          const imageNumber = await AsyncStorage.getItem("profilePic");
          if (imageNumber !== null) {
            setImage(profileLog[imageNumber]);
          }
        } catch (e) {
          console.log(e);
        }
      };
      handlePress2();
    }, [])
  );

  //profilepic
  const [Categories, setCategories] = useState([]);
  const [sum, setSum] = useState(0);
  const handlePress1 = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/addcategory");
  };
  const segments = useSegments();
  const prevsegments = useRef(segments);
  const fetchData = async () => {
    try {
      const expenses = await getTodayExpenses();
      setExpenses(expenses);
      // console.log(expenses)
    } catch (e) {
      console.log("Error fetching expenses:", e);
    }
    try {
      const budget = await AsyncStorage.getItem("userBudget");
      if (budget !== null) {
        setUserBudget(budget);
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const monthExpense = await getSumOfMonthExpenses();
      setMonthExpense(monthExpense);
    } catch (e) {
      console.log("Error fetching expenses:", e);
    }
    try {
      const name = await AsyncStorage.getItem("userName");
      if (name !== null) {
        setUserName(name);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const categories = await getAllCategories();
  //     setCategories(categories)
  //     console.log(categories)
  //   } catch(e) {
  //     console.log(e);
  //   }
  // }

  // useFocusEffect(
  //   useCallback(() => {
  //     fetchData();
  // },[]));
  // useEffect(() => {
  //   if (prevsegments.current !== segments && segments.includes('home')) {
  //     console.log(segments);
  //     prevsegments.current=segments;
  //     fetchData();

  //   }
  // },[segments]);
  useFocusEffect(
    
    useCallback(() => {
      console.log("focused");
      fetchData();
      loadTopCategories();
    }, [])
  );
  const checkMonthName = (month) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month - 1];
  };
  var month = new Date().getMonth() + 1;
  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full">
      <StatusBar hidden={false} style="light" animated={true} />

      <ScrollView>
        <View className="m-3 mb-[80px]">
          <View className="flex flex-col space-y-5">
            <View className="flex flex-row justify-between items-center">
              <View className="justify-center items-center">
                <Text className="text-white text-2xl font-bold">
                  Hello! {userName}
                </Text>
              </View>
              <Pressable onPress={() => router.push("../(profile)")}>
                <View className="items-center justify-center">
                  <Image
                    source={image}
                    resizeMode="cover"
                    className="h-10 w-10 rounded-full"
                  />
                </View>
              </Pressable>
            </View>

            {/* <ProgressCard /> */}
            <Button handlePress={() => router.push("../(activity)")}>
              <View className="bg-[#8f00ff] w-full  rounded-2xl p-3 mt-5">
                <View className="flex flex-row justify-between items-center">
                  <View className="">
                    <Text className="text-white font-semibold text-2xl ">
                      ₹ {monthexpense}
                    </Text>
                  </View>
                  <View className="">
                    <Text className="text-white text-xs opacity-70">
                      {checkMonthName(month)}
                    </Text>
                  </View>
                </View>
                <Text className="text-white opacity-70 text-xs self-start">
                  of {userBudget}
                </Text>
                <View className="w-100 h-10  justify-start my-3 rounded-full ">
                  <BarChart
                    horizontal
                    disableScroll
                    disablePress
                    barBorderColor={"#FFFFFF"}
                    data={[
                      {
                        value:
                          monthexpense > userBudget ? userBudget : monthexpense,
                      },
                    ]}
                    yAxisLabelWidth={0}
                    barWidth={40}
                    height={40}
                    width={screenWidth - 47} // Subtract padding and margins
                    shiftY={-56.3}
                    shiftX={-56} // Removed negative shift
                    frontColor={
                      monthexpense > userBudget * 1.5
                        ? "#8B0000" // Dark red if over 200% of budget
                        : monthexpense > userBudget * 1.4
                        ? "#FF0000" // Red if over 175% of budget
                        : monthexpense > userBudget * 1.25
                        ? "#FF4500" // Orange red if over 150% of budget
                        : monthexpense > userBudget
                        ? "#FF8C00" // Orange if over 100% of budget
                        : "#0FB700" // Green if within budget
                    }
                    maxValue={userBudget}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    roundedBottom
                    roundedTop
                    hideRules
                    hideYAxisText
                    // backgroundColor={'#123456'}
                    // isAnimated
                    hideOrigin
                  />
                </View>
              </View>
            </Button>
            {/* <ProgressCard /> */}

            <View className="flex-1 flex flex-col">
              <View>
                <Text className="text-[#8f00ff] text-lg font-bold">Today</Text>
              </View>

              {Expenses.length > 0 ? (
                Expenses.map((item, index) => (
                  <Animated.View>
                    <TodayListItems
                      key={index}
                      title={item.name}
                      value={item.cost}
                    />
                  </Animated.View>
                ))
              ) : (
                <Card>
                  <View className="flex-1 justify-center items-center">
                    <Text className="text-white opacity-40 text-lg">
                      No expenses today
                    </Text>
                    <Button
                      handlePress={() => {
                        router.push("(tabs)/(add)");
                      }}
                    >
                      <View className="flex flex-row justify-center items-center space-x-1">
                        <Text className="text-[#8f00ff] text-lg font-bold">
                          Add
                        </Text>
                        <Ionicons
                          name="add-circle-outline"
                          size={32}
                          color="#8f00ff"
                        ></Ionicons>
                      </View>
                    </Button>
                  </View>
                </Card>
              )}

              <View className="self-center flex flex-col"></View>
            </View>

            <View className="flex-1 flex flex-col space-y-3">
              <View>
                <Text className="text-[#8f00ff] text-lg font-bold">
                  Categories
                </Text>
              </View>

              {/* <View className="flex flex-row flex-wrap">
                <CatGridItem title={top3[0].name} value={top3[1]} />
                <CatGridItem title="🍇 Food" value="100" />
                <CatGridItem title="🎥 Movie" value="300" />
                <AddCat handlePress={handlePress1} />
              </View> */}
              <View className="flex flex-row flex-wrap">
                {top3.map((category) => (
                  <CatGridItem
                    key={category.name}
                    title={category.name}
                    value={category.value.toString()}
                  />
                ))}
                <AddCat handlePress={handlePress1} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
