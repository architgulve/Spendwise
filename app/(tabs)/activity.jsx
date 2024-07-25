import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { MotiPressable, } from 'moti/interactions';
import { MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const Activity = () => {
  return (
    <SafeAreaView edges={['top']} className="bg-[#000000] h-full">
      <StatusBar hidden={false} style="light" />
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-col space-y-5">
            
            <View className="flex-1">
              <Text className="text-white text-3xl font-bold">Activity</Text>
            </View>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
