import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Badge from "../../components/Badge";

const Badges = () => {
  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full ">
      <StatusBar hidden={false} style="light" />
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-col space-y-5">
            <View className="flex-1">
              <Text className="text-white text-2xl font-bold">Badges</Text>
            </View>
            <View className="flex flex-row flex-wrap justify-between ">
              <View>
                <Badge />
              </View>
              <View>
                <Badge />
              </View>
              <View>
                <Badge />
              </View>
              <View>
                <Badge />
              </View>
              <View>
                <Badge />
              </View>
              <View>
                <Badge />
              </View>
              <View>
                <Badge />
              </View>
              <View>
                <Badge />
              </View>
              <View>
                <Badge />
              </View>
              <View>
                <Badge />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Badges;
