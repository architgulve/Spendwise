import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Button from "../../../components/Button";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../../../components/backbutton";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EnterCost = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const setTempCost = async (displayValue) => {
    try {
      await AsyncStorage.setItem('tempCost', displayValue);
    } catch (e) {
      console.log(e);
    }    
  }
  const handleBackspace = () => {
    if (displayValue.length === 1) {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  const handleAddPress = () => {
    setTempCost(displayValue);
    router.push("/(tabs)/(add)/i");
  }

  const renderNumberButton = (number) => (
    <TouchableOpacity
      onPress={() => handleNumberInput(number)}
      className="w-[30vw] h-[20vw] bg-black border-2 border-[#8f00ff] p-30 rounded-full justify-center items-center shadow-glow"
    >
      <Text className="text-white">{number}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full">
      <View className="bg-black h-full">
        <StatusBar hidden={false} style="light" animated={true} />
        <View className="items-left w-16 absolute">
          <BackButton />
        </View>
        
        <View className="w-full h-1/2 justify-center items-center"> 
          <Text className="text-7xl text-white">
            {displayValue}
          </Text>
        </View>

        <View className="w-full h-1/2 justify-center items-center">
          <View className="flex flex-col flex-wrap justify-between space-y-3">
            <View className="flex flex-row justify-between space-x-3">
              {renderNumberButton('1')}
              {renderNumberButton('2')}
              {renderNumberButton('3')}
            </View>    
            <View className="flex flex-row justify-between space-x-3">
              {renderNumberButton('4')}
              {renderNumberButton('5')}
              {renderNumberButton('6')}
            </View> 
            <View className="flex flex-row justify-between space-x-3">
              {renderNumberButton('7')}
              {renderNumberButton('8')}
              {renderNumberButton('9')}
            </View> 
            <View className="flex flex-row justify-between space-x-3">
              <TouchableOpacity
                onPress={handleBackspace}
                className="w-[30vw] h-[20vw] border-2 border-[#8f00ff] bg-[#8f00ff] p-30 rounded-full justify-center items-center shadow-glow"
              >
                <Ionicons name="arrow-back-outline" size={30} color="white" />
              </TouchableOpacity>
              {renderNumberButton('0')}
              <TouchableOpacity
                onPress={handleAddPress}
                className="w-[30vw] h-[20vw] border-2 border-[#8f00ff] bg-[#8f00ff] p-30 rounded-full justify-center items-center shadow-glow"
              >
                <Text className="text-white">ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterCost;