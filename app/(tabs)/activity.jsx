import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback, useRef } from "react";
import SegmentedControl from "../../components/SegmentedControl";
import {
  deleteAllExpenses,
  deleteExpense,
  getAllExpenses,
  getLastWeekExpenses,
  getSumOfMonthExpenses,
} from "../../utils/database";
import TodayListItems from "../../components/TodayListItems";
import { useFocusEffect } from "@react-navigation/native";
import Button from "../../components/Button";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { PanGestureHandler } from 'react-native-gesture-handler';
import SwipeableItem from "../../components/SwipeableItem";
import * as Haptics from "expo-haptics";
import { BarChart } from "react-native-gifted-charts";
import { FullWindowOverlay } from "react-native-screens";
import { useSegments } from "expo-router";
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";

const Activity = () => {
  // const [data, setData] = useState("week");
  const [selectedValue, setSelectedValue] = useState(1);
  const [Expenses, setExpenses] = useState([]);

  const [userBudget, setUserBudget] = useState("5000");
  const [weeklyExpenses, setWeeklyExpenses] = useState([0, 0, 0, 0, 0, 0, 0]); // Default to zeros
  const segments = useSegments();
  const prevsegments = segments;
  const weekData= getLastWeekExpenses();
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
  

  useEffect(() => {
    if (prevsegments.current !== segments && segments.includes('activity')) {
      console.log(segments);
      prevsegments.current=segments;
      fetchData();
      
    }
  },[segments]);
  // useFocusEffect(
  //   useCallback(() => {
  //     fetchData(); // Fetch data every time the tab comes into focus
  //   }, [])
  // );

  
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
            <View className="h-[67vw] rounded-2xl w-full bg-[#121212] overflow-hidden items-center justify-center ">
              <View className="w-full items-center ">
                <BarChart
                  data={weeklyExpenses.map((value, index) => ({
                    value,
                    label: `${index}`,
                  }))} // Dynamically map weekly expenses
                  maxValue={userBudget}
                  // disableScroll
                  backgroundColor={'#123456'}
                  roundedTop
                  roundedBottom
                  // width={300}
                  // height={200}
                  // showXAxisIndices
                  // showYAxisIndices
                  xAxisThickness={0}
                  yAxisThickness={0}
                  rulesColor={'#232323'}
                  // hideRules
                  // barWidth={20}
                  showValues
                  frontColor={'#8f00ff'}
                  yAxisTextStyle={{color : 'white'}}
                  xAxisLabelTextStyle={{color : 'white'}}
                  // noOfSections={4}
                  referenceLine1Config={userBudget}
                  yAxisLabelWidth={0}
                  hideAxesAndRules
                  renderTooltip={(item, index) => {
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
            <View>
              <Text className="text-[#8f00ff] text-lg font-bold">
                Categories
              </Text>
            </View>
            <View className="rounded-2xl w-full bg-[#121212] overflow-hidden p-3 items-center">
              {/* <View className="rounded-full h-[60vw] w-[60vw] bg-emerald-800"></View> */}
            </View>
            <View>
              <Text className="text-[#8f00ff] text-lg font-bold">Expenses</Text>
            </View>
            <View className="rounded-2xl w-full overflow-hidden items-center">
              {Expenses.length > 0 ? (
                Expenses.map((item,) => (
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
                    <TodayListItems title={item.name} value={item.cost} />
                  </SwipeableItem>
                ))
              ) : (
                <Text className="text-white">No expenses found.</Text>
              )}
            </View>
            <View>
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
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
