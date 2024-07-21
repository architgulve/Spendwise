import { View, Text, ScrollView, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import * as Haptics from 'expo-haptics';
import { MotiView } from 'moti'
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from 'react';
import TodayListItems from '../../components/TodayListItems';
import CatGridItem from '../../components/CatGridItem';
import AddCat from '../../components/AddCat';
import { router } from 'expo-router';
import ProgressCard from '../../components/ProgressCard';

const Home = () => {
  const [userName, setUserName] = useState('Stranger');

  useEffect(() => {
    const fetchUserName = async () => {
    try {
        const name = await AsyncStorage.getItem("userName");
        if (name !== null) {
        setUserName(name);
        }
      } catch (e) {
          console.log(e);
      }
      };
      fetchUserName();
  }, []);

  const handlePress = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push("/addcategory");
  };

  return (
    <SafeAreaView
      edges={["top"]}
      className="bg-[#000000] h-full "
    >
      <StatusBar hidden={false} style="light" />
        <ScrollView>
          <View className="m-3">
            <View className="flex flex-col space-y-5">

              <View className="flex-1">
                <Text className="text-white text-3xl font-bold">Hello! {userName}</Text>
              </View>
              
              <ProgressCard />

              <View className="flex-1 flex flex-col space-y-3">
                <View>
                  <Text className="text-[#7700D7] text-lg font-bold">Today</Text>
                </View>
                
                <View className="self-center flex flex-col">  
                  <TodayListItems
                    title="Clothes"
                    value="200"
                  />
                  <TodayListItems
                    title="Food"
                    value="100"
                  />
                  <TodayListItems
                    title="Entertainment"
                    value="300"
                  />
                </View>
              </View>

              <View className="flex-1 flex flex-col space-y-3">

                <View>
                  <Text className="text-[#7700D7] text-lg font-bold">Categories</Text>
                </View>
               
                <View className="flex flex-row flex-wrap">
                  <CatGridItem
                    title="👔 Clothes"
                    value="200"
                  />
                  <CatGridItem
                    title="🍇 Food"
                    value="100"
                  />
                  <CatGridItem
                    title="🎥 Movie"
                    value="300"
                  />
                  <AddCat
                    handlePress={handlePress}
                  />
                </View>   

              </View>

            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home