import { View, Text, ScrollView, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { MotiPressable, } from 'moti/interactions';
import { MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
// import { ImageBackground} from 'react-native';

const Activity = () => {
  const [profile, setProfile] = useState("assets/images/9.png");

  return (
    <SafeAreaView edges={['top']} className="bg-[#000000] h-full">
      <StatusBar hidden={false} style="light" />
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-col space-y-5">
            
            <View className="flex-1">
              <Text className="text-white text-2xl font-bold">Activity</Text>
            </View>
            <View className="overflow-hidden rounded-full w-[50vw] h-[50vw]  items-center justify-center">
              {/* <Text className="text-white text-3xl font-bold"> */}
              <ImageBackground source={require("../../assets/images/9.png")}>
                <View className=" rounded-full w-[50vw] h-[50vw]  items-center justify-center"></View>
              </ImageBackground>
              {/* </Text> */}
              {/* <View>
                <Button handlePress={() => setProfile(2)}>
                  <ProfilePic image={require("../../assets/images/9.png")} />
                </Button>
              </View> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
