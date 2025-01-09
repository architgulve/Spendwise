

import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Swipeable } from "react-native-gesture-handler";
import { RectButton } from "react-native-gesture-handler";
import {
  deleteAllExpenses,
  deleteExpense,
  getAllExpenses,
} from "../../../utils/database";
import Button from "../../../components/Button";
import TodayListItems from "../../../components/TodayListItems";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const History = () => {
  const [expenses, setExpenses] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getAllExpenses();
      const sortedData = data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setExpenses(sortedData);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderRightActions = (item) => {
    return (
      <RectButton
        className="bg-red-600 w-20 justify-center items-center"
        onPress={async () => {
          await deleteExpense(item.expense_id);
          await fetchData();
        }}
      >
        <Text className="text-white">Delete</Text>
      </RectButton>
    );
  };

  // Determine which expenses to display
  const displayedExpenses = showAll ? expenses : expenses.slice(0, 5);

  const renderItem = ({ item }) => (
    <Swipeable
      renderRightActions={() => renderRightActions(item)}
      overshootRight={false}
    >
      <View className="bg-[#1C1C1E] w-[calc(100%-24px)] py-3 px-4 mb-2 rounded-3xl">
        <TodayListItems
          title={item.name}
          value={item.cost}
          cat={item.category}
        />
      </View>
    </Swipeable>
  );

  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full">
      <StatusBar hidden={false} style="light" />
      <View className="m-3 mb-32 ">
        <View className="flex flex-row justify-between items-center p-1">
          <Text className="text-white text-2xl font-bold">History</Text>
          <Button
            handlePress={() => {
              router.back();
            }}
          >
            <View className="bg-[#1c1c1c] items-center rounded-full p-3 self-center mt-3">
              <Text className="text-white text-lg ">Back</Text>
            </View>
          </Button>
        </View>
        {displayedExpenses.length > 0 ? (
          <FlatList
            data={displayedExpenses}
            renderItem={renderItem}
            keyExtractor={(item) => item.expense_id.toString()}
            ListFooterComponent={
              <>
                {!showAll && expenses.length > 5 ? (
                  <Button handlePress={() => setShowAll(true)}>
                    <View className="bg-gray-600 items-center rounded-full p-3 self-center mt-3">
                      <Text className="text-white text-lg">More</Text>
                    </View>
                  </Button>
                ) : null}
                {expenses.length > 0 && (
                  <Button
                    handlePress={() => {
                      deleteAllExpenses();
                      fetchData();
                    }}
                  >
                    <View className="bg-red-600 items-center rounded-full p-3 self-center mt-3">
                      <Text className="text-white text-lg">Delete All</Text>
                    </View>
                  </Button>
                )}
              </>
            }
          />
        ) : (
          <Text className="text-white">No expenses found.</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default History;
