import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'
import Button from "../../../components/Button";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../../../components/backbutton";

const EnterCost = () => {
  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full ">
      <View className="bg-black h-full ">
        <StatusBar hidden={false} style="light" animated={true} />
          <View className="items-left bg-[#121212] w-16 absolute">
            <BackButton ></BackButton>
          </View>
          <View className="w-full h-1/2 justify-center items-center "> 
          <Text className="text-7xl text-white ">
            100
          </Text>
          </View>

          <View className="w-full h-1/2 justify-center items-center ">
            <View className="flex flex-col flex-wrap justify-between space-y-3 ">
              <View className="flex flex-row justify-between space-x-3">
                <View>
                  <Button>
                    <View className="w-[30vw] h-[20vw] bg-black border-4 border-[#8f00ff]  p-30 rounded-full justify-center items-center">
                      <Text className="text-white">
                        1
                      </Text>
                    </View>
                  </Button>
                </View>
                <View>
                  <Button>
                    <View className="w-[30vw] h-[20vw] bg-black border-4 border-[#8f00ff]  p-30 rounded-full justify-center items-center">
                      <Text className="text-white">
                        2
                      </Text>
                    </View>
                  </Button>
                </View>
                <View>
                  <Button>
                    <View className="w-[30vw] h-[20vw] bg-black border-4 border-[#8f00ff]  p-30 rounded-full justify-center items-center">
                      <Text className="text-white">
                        3
                      </Text>
                    </View>
                  </Button>
                </View>
              </View>    
              <View className="flex flex-row justify-between space-x-3">
                <View>
                  <Button>
                    <View className="w-[30vw] h-[20vw] bg-black border-4 border-[#8f00ff]  p-30 rounded-full justify-center items-center">
                      <Text className="text-white">
                        4
                      </Text>
                    </View>
                  </Button>
                </View>
                <View>
                  <Button>
                    <View className="w-[30vw] h-[20vw] bg-black border-4 border-[#8f00ff]  p-30 rounded-full justify-center items-center">
                      <Text className="text-white">
                       5
                      </Text>
                    </View>
                  </Button>
                </View>
                <View>
                  <Button>
                    <View className="w-[30vw] h-[20vw] bg-black border-4 border-[#8f00ff]  p-30 rounded-full justify-center items-center">
                      <Text className="text-white">
                        6
                      </Text>
                    </View>
                  </Button>
                </View>
              </View> 
              <View className="flex flex-row justify-between space-x-3">
                <View>
                  <Button>
                    <View className="w-[30vw] h-[20vw] bg-black border-4 border-[#8f00ff]  p-30 rounded-full justify-center items-center">
                      <Text className="text-white">
                        7
                      </Text>
                    </View>
                  </Button>
                </View>
                <View>
                  <Button>
                    <View className="w-[30vw] h-[20vw] bg-black border-4 border-[#8f00ff]  p-30 rounded-full justify-center items-center">
                      <Text className="text-white">
                        8
                      </Text>
                    </View>
                  </Button>
                </View>
                <View>
                  <Button
                    // onPress={() => router.push("/(t")}
                  >
                    <View className="w-[30vw] h-[20vw] bg-black border-4 border-[#8f00ff]  p-30 rounded-full justify-center items-center">
                      <Text className="text-white">
                        9
                      </Text>
                    </View>
                  </Button>
                </View>
              </View> 
              <View className="flex flex-row justify-between space-x-3">
                <View>
                  <Button>
                    <View className="w-[30vw] h-[20vw] border-4 border-[#8f00ff] bg-[#8f00ff]  p-30 rounded-full justify-center items-center">
                      <Ionicons name="arrow-back-outline" size={30} color="white" />
                    </View>
                  </Button>
                </View>
                <View>
                  <Button>
                    <View className="w-[30vw] h-[20vw] bg-black border-4 border-[#8f00ff]  p-30 rounded-full justify-center items-center">
                      <Text className="text-white">
                        0
                      </Text>
                    </View>
                  </Button>
                </View>
                <View>
                  <Button>
                    <View className="w-[30vw] h-[20vw] border-4 border-[#8f00ff] bg-[#8f00ff] p-30 rounded-full justify-center items-center">
                      <Text className="text-white">
                        ADD
                      </Text>
                    </View>
                  </Button>
                </View>
              </View>           
               
            </View>
          </View>




      </View>
    </SafeAreaView>
  )
}

export default EnterCost