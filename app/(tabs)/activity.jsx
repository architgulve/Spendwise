import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import SegmentedControl from "../../components/SegmentedControl";
import {
  deleteallExpenses,
  deleteExpense,
  getExpenses,
  initDatabase,
} from "../../utils/database";
import TodayListItems from "../../components/TodayListItems";
import { useFocusEffect } from "@react-navigation/native";
import Button from "../../components/Button";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { PanGestureHandler } from 'react-native-gesture-handler';
import SwipeableItem from "../../components/SwipeableItem";
import * as Haptics from "expo-haptics";

const Activity = () => {
  const [data, setData] = useState("week");
  const [selectedValue, setSelectedValue] = useState(1);
  const [Expenses, setExpenses] = useState([]);

  const fetchData = async () => {
    try {
      const expenses = await getExpenses(); // Fetch expenses from the database
      setExpenses(expenses); // Update the state with the fetched expenses
    } catch (e) {
      console.log("Error fetching expenses:", e);
    }
  };
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
                options={["Month", "Week", "Year"]}
                onChange={(newValue) => setSelectedValue(newValue)}
              />
            </View>
            <View className="h-[60vw] rounded-2xl w-full bg-[#121212]"></View>
            <View>
              <Text className="text-[#8f00ff] text-lg font-bold">
                Categories
              </Text>
            </View>
            <View className="rounded-2xl w-full bg-[#121212] overflow-hidden p-3 items-center">
              <View className="rounded-full h-[60vw] w-[60vw] bg-emerald-800"></View>
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
                  deleteallExpenses();
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
