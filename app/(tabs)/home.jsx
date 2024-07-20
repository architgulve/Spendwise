import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { MotiView } from 'moti'
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from 'react';
import TodayListItems from '../../components/TodayListItems';
import CatGridItem from '../../components/CatGridItem';
import AddCat from '../../components/AddCat';
import { router } from 'expo-router';

const Home = () => {
  const [userName, setUserName] = useState('Stranger');
  const [userBudget, setUserBudget] = useState('5000');

  useEffect(() => {
    const fetchUserBudget = async () => {
      try {
        const budget = await AsyncStorage.getItem("userBudget");
        if (budget !== null) {
          setUserBudget(budget);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserBudget();
  }, []);

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

  const checkMonthName = (month) => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month - 1];
  };
  var month=new Date().getMonth() + 1;

  const handlePress = async () => {
    router.push("/addcategory");
  };

  return (
    <View className="bg-black h-full ">
      <StatusBar hidden={false} style="light" />
      <SafeAreaView>
        <ScrollView>
          <View className="m-3">
            <View className="flex flex-col space-y-5">

              <View className="flex-1">
                <Text className="text-white text-3xl font-bold">Hello! {userName}</Text>
              </View>
              
              <View className="bg-[#540495] w-full  rounded-2xl p-3 self-center flex-1">
                <View className="flex flex-row justify-between items-center">
                  <View className="">
                    <Text className="text-white text-2xl ">INR 0.00</Text>
                  </View>
                  <View className="">
                    <Text className="text-white opacity-70">{checkMonthName(month)}</Text>
                  </View>
                </View>
                <Text className="text-white opacity-70 self-start">of {userBudget}</Text>
                <View className="w-full h-10 bg-black justify-center self-center my-3 rounded-full ">
                  <View className="w-1/2 h-10 bg-[#0FB700] rounded-full justify-start"></View>
                </View>
              </View>

              <View className="flex-1 flex flex-col space-y-3">
                <View>
                  <Text className="text-[#7700D7] text-xl font-bold">Today</Text>
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
                  <Text className="text-[#7700D7] text-xl font-bold">Categories</Text>
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
    </View>
  )
}

export default Home