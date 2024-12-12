import { View, Text } from "react-native";
import React, { useState } from "react";
import Button from "./Button";
import { deleteCategory, sumofCategory } from "../utils/database";
import { useStoreRootState } from "expo-router/build/global-state/router-store";

const CatListItem = ({title, color, cost, handlePress, id}) => {

  return (
    <Button
      handlePress={handlePress}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor:color,
        }}
        className="w-full rounded-2xl p-3 mb-5 "
      >
        <View className='flex flex-row justify-between items-center'>
          <View className='flex flex-row items-center space-x-3'>
            {/* <View style={{backgroundColor:color}} className='h-3 w-3 rounded-full'></View> */}
            <Text style={{color:color}}className='text-base text-white'>{title}</Text>
          </View>
          <Button
            handlePress={() => {
              deleteCategory(title)
            }}
          >
            <Text className='text-white'>₹{cost}</Text>
          </Button>
        </View>
      </View>
    </Button>
  );
};

export default CatListItem;
