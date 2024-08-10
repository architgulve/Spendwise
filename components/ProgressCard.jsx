import { View, Text } from 'react-native'
import React from 'react'
// import View from './View'
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const ProgressCard = () => {
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

    const checkMonthName = (month) => {
        const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[month - 1];
    };
    var month=new Date().getMonth() + 1;
  return (
    <View className="bg-[#8f00ff] w-full  rounded-2xl p-3 mt-5">
        {/* <View className="bg-[#540495] w-full  rounded-2xl p-3 mt-5 flex-1"> */}
            {/* <LinearGradient
                colors={['#8d00FF', '#4C0088']}
                className="w-full bg-[#540495] rounded-2xl p-3 mt-5 flex-1"
            > */}
                <View className="flex flex-row justify-between items-center">
                    <View className="">
                        <Text className="text-white font-semibold text-2xl ">₹ 50.00 </Text>
                    </View>
                    <View className="">
                        <Text className="text-white text-xs opacity-70">{checkMonthName(month)}</Text>
                        </View>
                    </View>
                        <Text className="text-white opacity-70 text-xs self-start">of {userBudget}</Text>
                        <View className="w-full h-10 bg-black justify-center self-center my-3 rounded-full ">
                        <LinearGradient
                            colors={['#0FB700', '#0FB700']}
                            className="w-1/2 h-10 bg-[#0FB700] rounded-l-full justify-start"
                        ></LinearGradient>
                    {/* <View className="w-1/2 h-10 bg-[#0FB700] rounded-full justify-start"></View> */}
                </View>
            {/* </LinearGradient> */}
        {/* </View> */}
    </View>
  )
}

export default ProgressCard