import { View, Text, ScrollView} from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../../components/backbutton';
const AboutUs = () => {
  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full">
    <View className="w-full bg-black  p-4">
      <View className="flex flex-row justify-between items-center w-full">
        <Text className="text-white font-semibold text-4xl">
          About Us
        </Text>
        <BackButton />
      </View>
    </View>
    <ScrollView className="flex-1 bg-black p-4  mb-[80px]">
      <View className="mb-6">
        <Text className="text-white font-sans text-base">
        We are a group of passionate college students from IIIT Pune who believe in the power of technology to solve real-world problems. Our journey started with a shared vision to create something impactful during our academic journey.

As budding engineers and innovators, we combined our skills, ideas, and creativity to build this app. It reflects not just our technical knowledge but also our determination to push boundaries and bring a meaningful solution to life.

This app represents our commitment to innovation, teamwork, and our ambition to make a difference. Thank you for being part of our journey—we hope you love using it as much as we enjoyed creating it!
        </Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);
};


export default AboutUs