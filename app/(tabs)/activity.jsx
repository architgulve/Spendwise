import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { MotiPressable, } from 'moti/interactions';
import { MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const Activity = () => {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const handleDeletePress = () => {
    setIsDeleteMode(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleCancelPress = () => {
    setIsDeleteMode(false);
  };

  return (
    <SafeAreaView edges={['top']} className="bg-[#000000] h-full">
      <StatusBar hidden={false} style="light" />
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-col space-y-5">
            <View className="flex-1">
              <Text className="text-white text-3xl font-bold">Activity</Text>
            </View>
            <View className="flex-1 flex flex-row justify-center space-x-3">
                  <MotiPressable
                    onPress= {isDeleteMode ? handleCancelPress : handleCancelPress}
                    animate={({ pressed }) => { 
                      'worklet'
                      return {
                        opacity: pressed ? 0.5 : 1,
                        scale: pressed ? 0.95 : 1,
                      }
                    }}
                    transition={{
                      type: 'spring',
                      duration: 100,
                    }}
                  >
                    <MotiView
                      from={{
                        width: 128,
                        height: 64,
                      }}
                      animate={{
                        width: isDeleteMode ? 64 : 128,
                        height: 64,
                      }}
                      transition={{
                        type: 'timing',
                        duration: 300,
                      }}
                      className={isDeleteMode ? `bg-[#701ab66b] rounded-full border-2 border-[#711AB6] items-center justify-center` : `bg-[#711AB6] rounded-full items-center justify-center`}
                    >
                      {isDeleteMode ? (
                        <Ionicons name="close-outline" size={24} color="#711AB6" />
                      ) : (
                        <Text className="text-white text-xl">Add</Text>
                      )}
                    </MotiView>
                  </MotiPressable>
              <MotiPressable
                onPress={isDeleteMode ? handleDeletePress : handleDeletePress}
                animate={({ pressed }) => { 
                  'worklet'
                  return {
                    opacity: pressed ? 0.5 : 1,
                    scale: pressed ? 0.95 : 1,
                  }
                }}
                transition={{
                  type: 'timing',
                  duration: 100,
                }}
              >
                <MotiView
                  from={{
                    width: isDeleteMode ? 128 : 64,
                    height: 64,
                  }}
                  animate={{
                    width: isDeleteMode ? 128 : 64,
                    height: 64,
                  }}
                  transition={{
                    type: 'timing',
                    duration: 300,
                  }}
                  className={isDeleteMode ? `bg-[#ff0000] rounded-full  items-center justify-center` : "bg-[#ff121228] rounded-full items-center justify-center border-2 border-[#ff0000]"}
                >
                  {isDeleteMode ? (
                    <Text className="text-[#ffffff] text-xl">Delete</Text>
                  ) : (
                    <Ionicons name="trash-outline" size={24} color="red" />
                  )}
                </MotiView>
              </MotiPressable>


            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
