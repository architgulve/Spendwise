import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import BackButton from '../../../components/backbutton'
import { SafeAreaView } from 'react-native-safe-area-context';
const ContactUs = () => {
  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full">
      <View className="w-full bg-black  p-4">
        <View className="flex flex-row justify-between items-center w-full">
          <Text className="text-white font-semibold text-4xl">
            Contact Us
          </Text>
          <BackButton />
        </View>
      </View>
      <ScrollView className="flex-1 bg-black p-4  mb-[80px]">
        <View className="mb-6">
          <Text className="text-white text-2xl font-bold mb-2">
            1. Phone Number
          </Text>
          <Text className="text-white font-bold text-lg">
            Archit Gulve: <Text className="text-white text-base">+91 89750 67935</Text>
          </Text>
          <Text className="text-white font-bold text-lg">
            Akshad Khune: <Text className="text-white text-base">+91 94047 55369</Text>
          </Text>
          <Text className="text-white font-bold text-lg">
            Atharva Khedekar: <Text className="text-white text-base">+91 73044 96155</Text>
          </Text>
        </View>

        <View className="mb-6">
          <Text className="text-white text-2xl font-bold mb-2">
            2. Email Address
          </Text>
          <Text className="text-white">
            <Text className="text-white font-bold text-lg">Archit:</Text>{' '}
            <Text className="text-white text-lg ">architgulve@gmail.com</Text>{'         '}
            <Text className="text-white font-bold text-lg">Akshad:</Text>{' '}
            <Text className="text-white text-lg ">akshadkhune@gmail.com</Text>{'         '}
            <Text className="text-white font-bold text-lg">Atharva:</Text>{' '}
            <Text className="text-white text-lg ">atharvakh7@gmail.com</Text>
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs