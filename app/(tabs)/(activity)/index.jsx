import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback, useRef } from "react";
import SegmentedControl from "../../../components/SegmentedControl";
import {
  deleteAllExpenses,
  deleteExpense,
  getAllCategories,
  getAllExpenses,
  getLastWeekExpenses,
  getSumOfMonthExpenses,
  sumofAllCategories,
} from "../../../utils/database";
import TodayListItems from "../../../components/TodayListItems";
import { useFocusEffect } from "expo-router";
import Button from "../../../components/Button";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import SwipeableItem from "../../../components/SwipeableItem";
import * as Haptics from "expo-haptics";
import { BarChart, PieChart } from "react-native-gifted-charts";
import { FullWindowOverlay } from "react-native-screens";
import { router, useSegments } from "expo-router";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import Card from "../../../components/Card";
import PieChartCatIndicator from "../../../components/PieChartCatIndicator";

const Activity = () => {
  // const [data, setData] = useState("week");
  const [selectedValue, setSelectedValue] = useState(1);
  const [Expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [userBudget, setUserBudget] = useState("5000");
  const [weeklyExpenses, setWeeklyExpenses] = useState([0, 0, 0, 0, 0, 0, 0]); // Default to zeros
  const segments = useSegments();
  const prevsegments = segments;
  const weekData = getLastWeekExpenses();
  const [sumofAllCat, setsumofAllCat] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     console.log(weekData["_j"] );
  //     const expenses = await getAllExpenses(); // Fetch expenses from the database
  //     setExpenses(expenses); // Update the state with the fetched expenses

  //     const weekData = await getLastWeekExpenses();
  //     setWeeklyExpenses(weekData);
  //   } catch (e) {
  //     console.log("Error fetching expenses:", e);
  //   }
  // };
  const fetchData = async () => {
    try {
      const sum = await sumofAllCategories();
      setsumofAllCat(sum);
    } catch (e) {
      console.log(e);
    }
    try {
      const cat = await getAllCategories();
      setCategories(cat);
    } catch (e) {
      console.log(e);
    }
    try {
      // console.log("Fetching data...");
      const expenses = await getAllExpenses(); // Fetch all expenses
      // console.log("Fetched expenses:", expenses);
      setExpenses(expenses);
      try {
        const budget = await AsyncStorage.getItem("userBudget");
        if (budget !== null) {
          setUserBudget(budget);
        }
      } catch (e) {
        console.log(e);
      }
      const weekData = await getLastWeekExpenses(); // Fetch weekly expenses
      // console.log("Fetched weekly expenses:", weekData);
      setWeeklyExpenses(weekData);
      // console.log("Expenses state:", Expenses);
      // console.log("Weekly expenses state:", weeklyExpenses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const piedata = [{}];

  // useEffect(() => {
  //   if (prevsegments.current !== segments && segments.includes("(activity)")) {
  //     console.log(segments);
  //     prevsegments.current = segments;
  //     fetchData();
  //   }
  // }, [segments]);
  useFocusEffect(
    useCallback(() => {
      fetchData(); // Fetch data every time the tab comes into focus
    }, [])
  );

  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full">
      <StatusBar hidden={false} style="light" />
      <ScrollView>
        <View className="m-3 mb-32">
          <View className="flex flex-col space-y-5">
            <View className="flex-1">
              <Text className="text-white text-2xl font-bold">Activity</Text>
            </View>
            <View>
              <SegmentedControl
                options={["Week", "Month", "Year"]}
                onChange={(newValue) => setSelectedValue(newValue)}
              />
            </View>

            <View className="h-[67vw] rounded-2xl w-full bg-[#1c1c1c] overflow-hidden items-center justify-center ">
              <View className="w-full items-center ">
                <BarChart
                  data={weeklyExpenses.map((value, index) => ({
                    value,
                    label: `${index}`,
                  }))}
                  maxValue={userBudget}
                  backgroundColor={"#123456"}
                  roundedTop
                  roundedBottom
                  xAxisThickness={0}
                  yAxisThickness={0}
                  rulesColor={"#232323"}
                  showValues
                  frontColor={"#8f00ff"}
                  yAxisTextStyle={{ color: "white" }}
                  xAxisLabelTextStyle={{ color: "white" }}
                  referenceLine1Config={userBudget}
                  yAxisLabelWidth={0}
                  hideAxesAndRules
                  renderTooltip={(item) => {
                    return (
                      <View className="bg-[#9000ff35] p-1.5 rounded-full ml-[-13] mb-[-40]">
                        <Text className="text-[#8f00ff]">{item.value}</Text>
                      </View>
                    );
                  }}
                  // gradientColor={'#FFEEFE'}
                />
              </View>
            </View>

            <View className="flex flex-row justify-between items-center">
              <View className=" p-1">
                <Text className="text-[#8f00ff] text-lg font-bold">
                  Categories
                </Text>
              </View>
              <Button
                handlePress={() => {
                  router.push("/categories");
                }}
              >
                <Ionicons
                  name="chevron-forward-outline"
                  color={"#ffffff"}
                  size={30}
                ></Ionicons>
              </Button>
            </View>
            <Card containerStyles={"items-center"}>
              {sumofAllCat.length > 0 ? (
                <>
                  <PieChart
                    radius={150}
                    textBackgroundRadius={26}
                    data={sumofAllCat.map((item) => ({
                      value: (item.total / userBudget) * 100 || 0,
                      color: item.cat_color || "#000000",
                    }))}
                  ></PieChart>
                  <View className="flex flex-row flex-wrap justify-evenly">
                    {categories.map((item) => (
                      <PieChartCatIndicator
                        key={item.category_id}
                        color={item.cat_color}
                        name={item.name}
                      />
                    ))}
                  </View>
                </>
              ) : (
                <>
                  <View>
                    <Text className="text-white opacity-40 text-lg">
                      No expenses
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
                </>
              )}
            </Card>
            <Card containerStyles={"mt-4 p-4 justify-center text-size-3xl"}>
              <View className="flex flex-col space-y-4  divide-y divide-[#2b2b2b]">
                <Button
                  handlePress={() => router.push("(tabs)/(activity)/history")}
                >
                  <View className="flex flex-row justify-between">
                    <View className="flex flex-row gap-3 items-center">
                      <Ionicons name="book" size={24} color="#3E00C2" />
                      <Text className="text-white font-bold text-size-3xl">
                        History
                      </Text>
                    </View>
                    <View>
                      <Ionicons
                        name="chevron-forward-outline"
                        size={24}
                        color="gray"
                      />
                    </View>
                  </View>
                </Button>
              </View>
            </Card>
            {/* <View className="rounded-2xl w-full overflow-hidden items-center">
              
              {Expenses.length > 0 ? (
                Expenses.map((item) => (
                  <SwipeableItem
                    key={item.expense_id}
                    item={item}
                    onDelete={async () => {
                      await deleteExpense(item.expense_id);
                      // await Haptics.impactAsync(Haptics.notificationAsync(
                      //   Haptics.NotificationFeedbackType.Success
                      // )).catch((e) => console.log(e));
                      await fetchData();
                    }}
                  >
                    <TodayListItems
                      title={item.name}
                      value={item.cost}
                      cat={item.category}
                    />
                  </SwipeableItem>
                ))
              ) : (
                <Text className="text-white">No expenses found.</Text>
              )}
            </View> */}
            {/* <View>
              <Button
                handlePress={() => {
                  deleteAllExpenses();
                  fetchData();
                }}
              >
                <View className="bg-red-600 items-center rounded-full p-3 self-center">
                  <Text className="text-white text-lg">Delete</Text>
                </View>
              </Button>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
