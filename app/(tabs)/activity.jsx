import { View, Text, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { MotiPressable } from "moti/interactions";
import { MotiView } from "moti";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
// import { ImageBackground} from 'react-native';'
import { Pressable } from "react-native";
import SegmentedControl from "../../components/SegmentedControl";
// import { }

const Activity = () => {
  const [data, setData] = useState("week");
  const [selectedValue, setSelectedValue] = useState(1);

  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full">
      <StatusBar hidden={false} style="light" />
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-col space-y-5 ">
            <View className="flex-1">
              <Text className="text-white text-2xl font-bold">Activity</Text>
            </View>
            <View>
              <SegmentedControl
                options={["Month", "Week", "Year"]}
                onChange={(newValue) => setSelectedValue(newValue)}
              />
            </View>
            <View className="h-[60vw] rounded-2xl  w-full bg-[#121212]"></View>
            <View>
              <Text className="text-[#8f00ff] text-lg font-bold">
                Categories
              </Text>
            </View>
            <View className=" rounded-2xl  w-full bg-[#121212] overflow-hidden p-3 items-center">
              <View className="rounded-full h-[60vw] w-[60vw] bg-emerald-800"></View>
            </View>
            {/* <BarCh */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
