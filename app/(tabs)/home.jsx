import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { MotiView } from 'moti'
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from 'react';


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

  return (
    <View className="bg-black h-full ">
      <StatusBar hidden={false} style="light" />
      <SafeAreaView>
        <ScrollView>
          <View className="mx-3">
            <View className="flex flex-col space-y-5">
        
              <View className="flex-1">
                <Text className="text-white text-3xl font-bold mt-5">Hello! {userName}</Text>
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
                <View className="items-center flex flex-col space-y-3">
                  <View className="bg-[#121212] w-full items-center p-4 rounded-2xl">
                    <View className="flex flex-row  w-full justify-between items-center">
                      <Text className=" text-white">Burgers</Text>
                      <Text className=" text-white">INR 0.00</Text>
                    </View>
                  </View>
                  <View className="bg-[#121212] w-full items-center p-4 rounded-2xl">
                    <View className="flex flex-row w-full justify-between items-center">
                      <Text className=" text-white">Burgers</Text>
                      <Text className=" text-white">INR 0.00</Text>
                    </View>
                  </View>
                  <View className="bg-[#121212] w-full items-center p-4 rounded-2xl">
                    <View className="flex flex-row  w-full justify-between items-center">
                      <Text className=" text-white">Burgers</Text>
                      <Text className=" text-white">INR 0.00</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View className="flex-1 flex flex-col space-y-3">
                <View>
                  <Text className="text-[#7700D7] text-xl font-bold">Categories</Text>
                </View>
                {/* <View className="w-11/12 self-center"> */}
                <View className="flex flex-row flex-wrap">
                  <View className="basis-1/2 ">
                    <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                      <Text className="text-white font-extrabold mt-3 ml-5">🍉 Food</Text>
                    </View>
                  </View>
                  <View className="basis-1/2 ">
                    <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                      <Text className="text-white font-extrabold mt-3 ml-5">🍇 Food</Text>
                    </View>
                  </View>
                  <View className="basis-1/2 ">
                    <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                      <Text className="text-white font-extrabold mt-3 ml-5">👕 Food</Text>
                    </View>
                  </View>
                  <View className="basis-1/2 ">
                    <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                      <Text className="text-white font-extrabold mt-3 ml-5">💻 Food</Text>
                    </View>
                  </View>
                  <View className="basis-1/2 ">
                    <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                      <Text className="text-white font-extrabold mt-3 ml-5">🍌 Food</Text>
                    </View>
                  </View>
                  <View className="basis-1/2 ">
                    <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                      <Text className="text-white font-extrabold mt-3 ml-5">🤡 Food</Text>
                    </View>
                  </View>
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