import { router, useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { ScrollView } from "moti";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SettingsComp from "../../../components/SettingsComp";
import Card from "../../../components/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useFocusEffect } from "expo-router";
import { Image } from "react-native";
import { useCallback } from "react";

const Settings = () => {
  const [userName, setUserName] = useState("Stranger");

  const defaultProfile = require("../../../assets/images/9.png");
  const profileLog = {
    1: require("../../../assets/images/1.png"),
    2: require("../../../assets/images/2.png"),
    3: require("../../../assets/images/3.png"),
    4: require("../../../assets/images/4.png"),
    5: require("../../../assets/images/5.png"),
    6: require("../../../assets/images/6.png"),
    7: require("../../../assets/images/7.png"),
    8: require("../../../assets/images/8.png"),
    9: require("../../../assets/images/9.png"),
    10: require("../../../assets/images/10.png"),
  };

  const [image, setImage] = useState(defaultProfile);
  const fetchData = async () => {
    try {
      const name = await AsyncStorage.getItem("userName");
      if (name !== null) {
        setUserName(name);
        // console.log(userName)
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const imageNumber = await AsyncStorage.getItem("profilePic");
      if (imageNumber !== null) {
        setImage(profileLog[imageNumber]);
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full ">
      <StatusBar hidden={false} style="light" />
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-col ">
            <View className="flex-1">
              <Text className="text-white text-2xl font-bold">Settings</Text>
            </View>
            <View className="flex-1 flex-col space-y-3 mb-[80px]">
              <Button handlePress={() => router.push("../../(profile)")}>
                <Card containerStyles="flex flex-row space-x-3 items-center justify-start p-4">
                  <View>
                    {/* <Ionicons name="person-circle-outline" size={64} color="gray" />
                     */}
                    <Image
                      source={image}
                      resizeMode="cover"
                      className="h-[64] w-[64] rounded-full"
                    />
                  </View>
                  <View>
                    <Text className="text-white text-xl font-semibold">
                      {userName}
                    </Text>
                    <Text className="text-white opacity-50">View Profile</Text>
                  </View>
                </Card>
              </Button>

              <Card containerStyles={"mt-8"}>
                <View className="flex flex-col gap-3 divide-y divide-[#2b2b2b]">
                  <View>
                    <Button>
                      <View className="flex flex-row justify-between">
                        <View className="flex flex-row gap-3 items-center">
                          <Ionicons
                            name="contrast-outline"
                            size={24}
                            color="#3E00C2"
                          />
                          <Text className="text-white">Appearance</Text>
                        </View>
                        <View>
                          <Ionicons
                            name="chevron-forward-outline"
                            size={24}
                            color="gray"
                          />
                        </View>
                      </View>
                    </Button>
                  </View>

                  <View className="pt-3">
                    <Button>
                      <View className="flex flex-row gap-3 justify-between">
                        <View className="flex flex-row space-x-3 items-center">
                          <Ionicons
                            name="notifications-outline"
                            size={24}
                            color="#C20000"
                          />
                          <Text className="text-white">Notifications</Text>
                        </View>
                        <View>
                          <Ionicons
                            name="chevron-forward-outline"
                            size={24}
                            color="gray"
                          />
                        </View>
                      </View>
                    </Button>
                  </View>
                </View>
              </Card>

              <SettingsComp
                icon="people-outline"
                color="#2196F3"
                title="Tell a Friend"
                //onPress={() => console.log('Pressed')}
              />

              <Card containerStyles={"mt-8"}>
                <View className="flex flex-col gap-3 divide-y divide-[#2b2b2b]">
                  <View>
                    <Button
                      handlePress={() => router.push("/contactus")}
                    >
                      <View className="flex flex-row justify-between">
                        <View className="flex flex-row gap-3 items-center">
                          <Ionicons
                            name="mail-outline"
                            size={24}
                            color="#FF5722"
                          />
                          <Text className="text-white">Contact Us</Text>
                        </View>
                        <View>
                          <Ionicons
                            name="chevron-forward-outline"
                            size={24}
                            color="gray"
                          />
                        </View>
                      </View>
                    </Button>
                  </View>

                  <View className="pt-3">
                    <Button
                      handlePress={() =>
                        router.push("/(tabs)/(settings)/termsandcon")
                      }
                    >
                      <View className="flex flex-row justify-between">
                        <View className="flex flex-row space-x-3 items-center">
                          <Ionicons
                            name="document-outline"
                            size={24}
                            color="#9E9E9E"
                          />
                          <Text className="text-white">
                            Terms and Conditions
                          </Text>
                        </View>
                        <View>
                          <Ionicons
                            name="chevron-forward-outline"
                            size={24}
                            color="gray"
                          />
                        </View>
                      </View>
                    </Button>
                  </View>

                  <View className="pt-3">
                    <Button
                      handlePress={() =>
                        router.push("/(tabs)/(settings)/aboutus")
                      }
                    >
                      <View className="flex flex-row justify-between">
                        <View className="flex flex-row space-x-3 items-center">
                          <Ionicons
                            name="information-circle-outline"
                            size={24}
                            color="#711AB6"
                          />
                          <Text className="text-white">About Us</Text>
                        </View>
                        <View>
                          <Ionicons
                            name="chevron-forward-outline"
                            size={24}
                            color="gray"
                          />
                        </View>
                      </View>
                    </Button>
                  </View>
                </View>
              </Card>

              <SettingsComp
                icon="hand-left-outline"
                color="#aaa7f0"
                title="Show Onboarding"
                handlePress={() =>
                  router.navigate("/(onboarding)/onb1adddaily")
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
