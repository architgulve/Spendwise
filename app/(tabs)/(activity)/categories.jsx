import { View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback, useRef } from "react";
import BackButton from "../../../components/backbutton";
import Button from "../../../components/Button";
import { router, useFocusEffect } from "expo-router";
import * as Haptics from "expo-haptics";
import CatListItem from "../../../components/CatListItem";
import { getAllCategories, sumofCategory } from "../../../utils/database";
import { useSegments } from "expo-router";

const Categories = () => {
  const segments = useSegments();
  // const prevsegments = useRef(segments);
  const [Categories,setCategories] = useState([]);
  const [sum,setSum] = useState(0);
  
  const fetchData = async () => {
    try {
      const categories = await getAllCategories();
      setCategories(categories)
      console.log(categories)
    } catch(e) {
      console.log(e);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
  },[]));
  // useEffect(() => {
  //   if (prevsegments.current !== segments && segments.includes('categories')) {
  //     console.log(segments);
  //     prevsegments.current=segments;
  //     fetchData();
      
  //   }
  // },[segments]);

  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full">
      <View className="w-full h-16 bg-black  p-4">
        <View className="flex flex-row justify-between items-center w-full">
          <Text className="text-white font-semibold text-2xl">
            Categories
          </Text>
          <BackButton />
        </View>
      </View>
      <ScrollView>
        <View className="m-3 mb-32">
          <View className="flex flex-col space-y-5">
            <View>
              {Categories.map((item) => (
                async () => {
                  const Sum = await sumofCategory(item.name);
                  setSum(Sum);
                },
                <CatListItem
                  key={item.category_id}
                  id={item.category_id}
                  title={item.name}
                  color={item.cat_color}
                  cost={sumofCategory(item.name)}
                />
              ))}
            </View>
            <View>
              <Button
                handlePress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  router.push("/addcategory");
                }}
              >
                <View className='bg-[#8f00ff35] p-4 rounded-full items-center'>
                  <Text className='text-[#8f00ff] font-semibold text-base'>Add Category</Text>
                </View>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;
