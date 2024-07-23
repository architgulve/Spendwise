import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import * as Haptics from 'expo-haptics';
import { MotiView } from 'moti'
import { MotiPressable } from 'moti/interactions';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Add = () => {
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const handleDeletePress = () => {
    setIsDeleteMode(true);
    //Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleCancelPress = () => {
    setIsDeleteMode(false);
  };
  const [Quantity, setQuantity] = useState(1);
  const Increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }
  const Decrement = () => {
    setQuantity(prevQuantity => prevQuantity - 1);
  }
  const [Cost, setCost] = useState(0);
  const addPress = async () => {
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Success
    )
  };
  const deletePress = async () => {
    Haptics.notificationAsync(
      Haptics.NotificationFeedbackType.Error
    )
  };

  return (
    <SafeAreaView
      edges={["top"]}
      className="bg-black h-full "
    >
      <View className="bg-black h-full ">
          <StatusBar hidden={false} style="light" animated={true}/>
          <ScrollView>
            <View className="m-3 mb-[80px]">
              <View className="flex flex-col space-y-5">
                <View>
                  <Text className="text-white text-3xl font-bold">Add Expense</Text>
                </View>
                <View className="flex-1 flex flex-row justify-between">
                  <View className="bg-[#121212] rounded-full p-3">
                    <Text className="text-white">Category</Text>
                  </View>
                  <View className="bg-[#121212] rounded-full p-3">
                    <Text className="text-[#ffffff]">Date</Text>
                  </View>
                </View>
                <Card containerStyles="flex-1 flex flex-col">
                  <View>
                    <Text className="text-[#711AB6] font-bold text-lg ">Cost</Text>
                  </View>
                  <View>
                    <View className={"p-3 rounded-2xl "}>
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
                <View className="flex-1 flex flex-row mx-2 justify-between items-center">
                  <Text className="text-[#711AB6] font-bold  text-lg">Quantity</Text>
                  <View className="flex flex-row ">
                    <Button 
                      ContainerStyles="bg-[#121212] p-3 rounded-l-xl"
                      handlePress={Decrement}
                    >
                      <Ionicons name="remove-outline" size={24} color="white" />
                    </Button>
                    <View className="bg-[#121212]  p-2 items-center justify-center">
                      <Text className="text-[#ffffff]">{Quantity}</Text>
                    </View>
                    <Button 
                      ContainerStyles="bg-[#121212] p-3 rounded-r-xl"
                      handlePress={Increment}
                    >
                      <Ionicons name="add-outline" size={24} color="white" />
                    </Button>
                  </View>
                </View>
                <Card containerStyles="flex-1 flex flex-row justify-between">
                  <Text className="text-[#711AB6] font-bold text-lg">Total</Text>
                  <Text className="text-white text-lg">{Cost*Quantity} INR</Text>
                </Card>
                <Card className="flex-1 flex flex-col space-y-3">
                  <View>
                    <Text className="text-[#711AB6] font-bold text-lg">Name</Text>
                  </View>
                  <View className={" min-w-full h-[60px] p-4 bg-[#000000] rounded-xl items-start "}>
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
                      <Text className="text-[#711AB6] font-bold text-lg">Description</Text>
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
              
                  <View className="flex-1 flex flex-row justify-center space-x-3">
                  <MotiPressable
                    onPress= {isDeleteMode ? handleCancelPress : addPress}
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
                //onLongPress={isDeleteMode ? undefined : handleDeletePress}
                onPress={isDeleteMode ? deletePress : handleDeletePress}
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
      </View>
    </SafeAreaView>
  )
}

export default Add



