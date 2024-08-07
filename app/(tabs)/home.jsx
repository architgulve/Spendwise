import { View, Text, ScrollView,StyleSheet, Pressable } from 'react-native'
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
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

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
      className="bg-[#000000] h-full"
    >
      <StatusBar hidden={false} style="light" animated={true} />

        <ScrollView>
          <View className="m-3 mb-[80px]">
            <View className="flex flex-col space-y-5">
              <View className="flex flex-row justify-between items-center">
                <View className="justify-center items-center">
                  <Text className="text-white text-2xl font-bold">Hello! {userName}</Text>
                </View>
                <Pressable
                  onPress={() => router.push("../profile")}
                >
                  <View className="items-center justify-center">
                    <Ionicons name='person-circle-outline' size={40} color="gray"></Ionicons>
                  </View>
                </Pressable>
              </View>

              <ProgressCard />

              <View className="flex-1 flex flex-col space-y-3">
                <View>
                  <Text className="text-[#8f00ff] text-lg font-bold">Today</Text>
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
                  <Text className="text-[#8f00ff] text-lg font-bold">Categories</Text>
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