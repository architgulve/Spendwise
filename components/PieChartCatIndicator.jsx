import { View, Text } from "react-native";
import React from "react";

const PieChartCatIndicator = ({color, name}) => {
  return (
    <View className="flex flex-row items-center space-x-2 m-4">
      <View
        style={{ backgroundColor: color }}
        className="h-4 w-4 rounded-md"
      ></View>
      <Text className='text-white'>{name}</Text>
    </View>
  );
};

export default PieChartCatIndicator;
