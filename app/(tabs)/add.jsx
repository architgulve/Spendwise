import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { MotiView } from 'moti'
import { MotiPressable } from 'moti/interactions';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Add = () => {
  const [Quantity, setQuantity] = useState(1);
  const Increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }
  const Decrement = () => {
    setQuantity(prevQuantity => prevQuantity - 1);
  }
  const [Cost, setCost] = useState(0);

  return (
    <View className="bg-black h-full ">
        <StatusBar hidden={false} style="light" />
        <SafeAreaView>
          <ScrollView>
            <View className="m-3">
              <View className="flex flex-col space-y-5">
                <View>
                  <Text className="text-white text-3xl font-bold">Add Expense</Text>
                </View>
                <View className="flex-1 flex flex-row justify-between">
                  <View className="bg-[#1a1a1a] rounded-full p-3">
                    <Text className="text-white">Category</Text>
                  </View>
                  <View className="bg-[#1a1a1a] rounded-full p-3">
                    <Text className="text-[#ffffff]">Date</Text>
                  </View>
                </View>
                <Card containerStyles="flex-1 flex flex-col space-y-5">
                  <View>
                    <Text className="text-[#711AB6] font-bold text-xl">Cost</Text>
                  </View>
                  <View>
                    <View className={"px-4 rounded-2xl "}>
                        <TextInput 
                            
                            className="flex-1 text-[#ffffff] text-7xl h-full text-center items-center justify-center"
                            placeholder="0"
                            value={Cost}
                            placeholderTextColor="#7a7a7a"
                            onChangeText={(e) => setCost(e)}
                            //onFocus={() => setIsFocused(true)}
                            //onBlur={() => setIsFocused(false)}
                            keyboardType="number-pad"
                            //autoComplete='given-name'
                            //{...props}
                        />
                    </View>
                  </View>
                </Card>
                <View className="flex-1 flex flex-row justify-between">
                  <Text className="text-[#711AB6] font-bold  ml-4 text-xl">Quantity</Text>
                  <View className="flex flex-row ">
                    <Button 
                      ContainerStyles="bg-[#121212] p-2 rounded-l-xl"
                      handlePress={Decrement}
                    >
                      <Ionicons name="remove-outline" size={24} color="white" />
                    </Button>
                    <View className="bg-[#121212]  p-1">
                      <Text className="text-[#ffffff] text-xl">{Quantity}</Text>
                    </View>
                    <Button 
                      ContainerStyles="bg-[#121212] p-2 rounded-r-xl"
                      handlePress={Increment}
                    >
                      <Ionicons name="add-outline" size={24} color="white" />
                    </Button>
                  </View>
                </View>
                <Card containerStyles="flex-1 flex flex-row justify-between">
                  <Text className="text-[#711AB6] font-bold text-xl">Total</Text>
                  <Text className="text-white text-xl">{Cost*Quantity} INR</Text>
                </Card>
                <Card className="flex-1 flex flex-col space-y-3">
                  <View>
                    <Text className="text-[#711AB6] font-bold text-xl">Name</Text>
                  </View>
                  <View className={" min-w-full h-[60px] p-4 bg-black rounded-2xl items-start "}>
                      <TextInput 
                          className="flex-1 text-white text-base w-full"
                          placeholder="Eg. Clothes"
                          //value={value}
                          placeholderTextColor="#7a7a7a"
                          //onChangeText={handleChangeText}
                          // onFocus={() => setIsFocused(true)}
                          // onBlur={() => setIsFocused(false)}
                          keyboardType="default"
                          //autoComplete='given-name'
                          //{...props}
                      />
                  </View>
                </Card>
                <Card containerStyles="flex-1 flex flex-col space-y-3">
                  <View>
                    <Text className="text-[#711AB6] font-bold text-xl">Description</Text>
                  </View>
                  <View className={" min-w-full h-[150px] px-4 bg-[#000000] rounded-2xl items-start "}>
                      <TextInput 
                          className="flex-1 text-white text-base h-full w-full "
                          placeholder="Eg. For Birthday"
                          //value={value}
                          multiline={true}
                          placeholderTextColor="#7a7a7a"
                          //onChangeText={handleChangeText}
                          // onFocus={() => setIsFocused(true)}
                          // onBlur={() => setIsFocused(false)}
                          keyboardType="default"
                          //autoComplete='given-name'
                          //{...props}
                      />
                  </View>
                </Card>
                <View className="flex-1 flex flex-row justify-center space-x-2">
                  <MotiPressable
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
                    className="bg-[#0FB700] rounded-full items-center justify-center"
                  >
                    <View className="flex-1 bg-[#711AB6] rounded-full w-32 h-16 items-center justify-center">
                      <Text className="text-white text-2xl">Add</Text>

                    </View>
                  </MotiPressable>
                  <MotiPressable
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
                    className="bg-[#7700D7] rounded-full items-center justify-center"
                  >
                    <View className="flex-1 bg-[#ff121241] rounded-full h-16 w-16 items-center justify-center border-2 border-[#ff0000]">
                      <Ionicons
                        name="trash-outline"
                        size={24}
                        color="red"
                        className="self-center p-4"
                      >

                      </Ionicons>
                    </View>
                  </MotiPressable>
                </View>
              </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Add



