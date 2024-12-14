import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useCallback, useDebugValue } from "react";
import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { router } from "expo-router";
import BackButton from "../../../components/backbutton";
import { BlurView } from "expo-blur";
import { addExpense, getAllCategories } from "../../../utils/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Animated, {
  FadeIn,
  FadeOut,
  LayoutAnimationType,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import CatDropdownItem from "../../../components/CatDropdownItem";

const Add = () => {
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(0);
  const [category, setCategory] = useState("Grocery");
  const [name, setName] = useState("No Name");
  const [description, setDescription] = useState("No Description");
  const [date, setDate] = useState(new Date());
  const categoryHeight = useSharedValue(50);
  const categoryWidth = useSharedValue("50%");
  const [categoryMode, setcategoryMode] = useState("closed");
  const [selectedCategory, setselectedCategory] = useState(["None", "#ffffff"]);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const [category, setCategory] = useState([]);
    // setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1)); // Prevent negative quantity
  };

  const fetchData = async () => {
    try {
      const Cat = await getAllCategories();
      setCategory(Cat);
    } catch (e) {
      console.log(e);
    }
    try {
      const savedCost = await AsyncStorage.getItem("tempCost");
      setCost(savedCost ? parseFloat(savedCost) : 0);
    } catch (e) {
      console.log("Error fetching cost:", e);
      setCost(0);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  const addPress = async () => {
    try {
      const numericCost = parseFloat(cost);
      if (isNaN(numericCost)) {
        throw new Error("Invalid cost value");
      }

      await addExpense(
        name,
        numericCost * quantity,
        description,
        date,
        date.getMonth() + 1,
        selectedCategory[0]
        // quantity
      );

      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      router.push("/(tabs)/(add)/donescreen");
    } catch (e) {
      console.log("Error adding expense:", e);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };
  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(categoryHeight.value),
    width: withTiming(categoryWidth.value),
  }));

  return (
    <SafeAreaView edges={["top"]} className="bg-black h-full">
      <View className="bg-black h-full">
        <StatusBar hidden={false} style="light" animated={true} />
        <ScrollView>
          <View className="m-3 mb-[120px]">
            <View className="flex flex-col space-y-5">
              <View className="flex-1 flex flex-row justify-between">
                <Text className="text-white text-2xl font-bold">
                  Add Expense
                </Text>
                {/* <View className="flex flex-row items-center space-x-2 bg-black rounded-full p-2 w-1/3" >
                  <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                    accentColor="#8f00ff"
                  />
                  <Text className="text-white text-base">
                    {date.onChanged ? date.toDateString() : 'Select Date'}
                  </Text>
                </View> */}
                <View className="flex flex-row items-center space-x-2 bg-black rounded-full p-2 w-1/3">
                  <Button
                    handlePress={() => {
                      // Show the date picker only when the button is pressed
                      setShow(true);
                    }}
                  >
                    <Text className="text-white text-base">
                      {date.toDateString()}
                    </Text>
                  </Button>

                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="date"
                      is24Hour={true}
                      display="default"
                      onChange={(event, selectedDate) => {
                        const currentDate = selectedDate || date;
                        setShow(Platform.OS === "ios");
                        setDate(currentDate);
                      }}
                      accentColor="#8f00ff"
                    />
                  )}
                </View>
              </View>

              {/* Category and Date Section */}
              <View>
                <Animated.View
                  className="bg-[#1c1c1c] rounded-2xl p-2 items-center"
                  style={animatedStyle}
                >
                  {categoryMode == "closed" ? (
                    <>
                      <Button
                        handlePress={() => {
                          categoryHeight.value = withTiming(
                            categoryHeight.value + 120
                          );
                          categoryWidth.value = withTiming("100%");
                          setcategoryMode("expanded");
                          // console.log(categoryMode)
                        }}
                      >
                        <View className="flex flex-row justify-between items-center w-full px-2">
                          <Text
                            className={`text-base`}
                            style={{
                              color: selectedCategory[1],
                            }}
                          >
                            {selectedCategory[0]}
                          </Text>
                          <View className="h-full w-10 justify-center items-end p-2">
                            <Ionicons
                              name="chevron-down-outline"
                              size={20}
                              color={selectedCategory[1]}
                            ></Ionicons>
                          </View>
                        </View>
                      </Button>
                    </>
                  ) : (
                    <>
                      <View className="w-full">
                        {/* <ScrollView horizontal> */}
                        <View className="flex flex-row flex-wrap">
                          {category.map((item) => (
                            <CatDropdownItem
                              key={item.category_id}
                              category={item.name}
                              color={item.cat_color}
                              handlePress={() => {
                                setcategoryMode("closed");
                                categoryHeight.value = withTiming(
                                  categoryHeight.value - 120
                                );
                                categoryWidth.value = withTiming("50%");
                                setselectedCategory([
                                  item.name,
                                  item.cat_color,
                                ]);
                              }}
                            />
                          ))}
                          {/* <CatDropdownItem
                          color={'#ffffff'}
                          category={'None'}
                          handlePress={() => {
                            setcategoryMode('closed');
                            categoryHeight.value = withTiming(categoryHeight.value - 200);
                            categoryWidth.value = withTiming('50%');
                            setselectedCategory(['None', '#ffffff']);
                          }}
                        />
                        <CatDropdownItem
                          color={'#8f00ff'}
                          category={'Animals'}
                          handlePress={() => {
                            setcategoryMode('closed');
                            categoryHeight.value = withTiming(categoryHeight.value - 200);
                            categoryWidth.value = withTiming('50%');
                            setselectedCategory(['Animals', '#8f00ff']);
                          }}
                        />
                        <CatDropdownItem
                          color={'#006666'}
                          category={'Food'}
                          handlePress={() => {
                            setcategoryMode('closed');
                            categoryHeight.value = withTiming(categoryHeight.value - 200);
                            categoryWidth.value = withTiming('50%');
                            setselectedCategory(['Food', '#123456']);
                          }}
                        />
                        <CatDropdownItem
                          color={'#FF5733'}
                          category={'Nature'}
                          handlePress={() => {
                            setcategoryMode('closed');
                            categoryHeight.value = withTiming(categoryHeight.value - 200);
                            categoryWidth.value = withTiming('50%');
                            setselectedCategory(['Nature', '#FF5733']);
                          }}
                        />
                        <CatDropdownItem
                          color={'#33FF57'}
                          category={'Technology'}
                          handlePress={() => {
                            setcategoryMode('closed');
                            categoryHeight.value = withTiming(categoryHeight.value - 200);
                            categoryWidth.value = withTiming('50%');
                            setselectedCategory(['Technology', '#33FF57']);
                          }}
                        />
                        <CatDropdownItem
                          color={'#5733FF'}
                          category={'Travel'}
                          handlePress={() => {
                            setcategoryMode('closed');
                            categoryHeight.value = withTiming(categoryHeight.value - 200);
                            categoryWidth.value = withTiming('50%');
                            setselectedCategory(['Travel', '#5733FF']);
                          }}
                        />
                        <CatDropdownItem
                          color={'#FFC300'}
                          category={'Art'}
                          handlePress={() => {
                            setcategoryMode('closed');
                            categoryHeight.value = withTiming(categoryHeight.value - 200);
                            categoryWidth.value = withTiming('50%');
                            setselectedCategory(['Art', '#FFC300']);
                          }}
                        />
                        <CatDropdownItem
                          color={'#FF33A1'}
                          category={'Music'}
                          handlePress={() => {
                            setcategoryMode('closed');
                            categoryHeight.value = withTiming(categoryHeight.value - 200);
                            categoryWidth.value = withTiming('50%');
                            setselectedCategory(['Music', '#FF33A1']);
                          }}
                        /> */}
                        </View>
                        {/* </ScrollView> */}
                        <Button
                          // ContainerStyles={''}
                          handlePress={() => {
                            categoryHeight.value = withTiming(
                              categoryHeight.value - 120
                            );
                            categoryWidth.value = withTiming("50%");
                            setcategoryMode("closed");
                            // console.log(categoryMode)
                          }}
                        >
                          <View className="w-full items-end p-2">
                            <Ionicons
                              name="chevron-up-outline"
                              size={20}
                              color={"#ffffff"}
                            ></Ionicons>
                          </View>
                        </Button>
                      </View>
                    </>
                  )}
                </Animated.View>
              </View>

              {/* Cost Input Section */}
              <Card containerStyles="flex-1 flex flex-col">
                <View>
                  <Text className="text-[#8f00ff] font-bold text-lg">Cost</Text>
                </View>
                <View>
                  <View className="p-3 rounded-2xl">
                    <TextInput
                      className="flex-1 text-[#ffffff] text-7xl h-full text-center items-center justify-center"
                      placeholder="0"
                      value={cost.toString()}
                      placeholderTextColor="#7a7a7a"
                      onChangeText={(text) => {
                        const numValue = parseFloat(text) || 0;
                        setCost(numValue);
                      }}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </Card>

              {/* Quantity Section */}
              <View className="flex-1 flex flex-row mx-2 justify-between items-center">
                <Text className="text-[#8f00ff] font-bold text-lg">
                  Quantity
                </Text>
                <View className="flex flex-row">
                  <Button
                    ContainerStyles="bg-[#1c1c1c] p-3 rounded-l-xl"
                    handlePress={decrement}
                  >
                    <Ionicons name="remove-outline" size={24} color="white" />
                  </Button>
                  <View className="bg-[#1c1c1c] p-2 items-center justify-center">
                    <Text className="text-[#ffffff]">{quantity}</Text>
                  </View>
                  <Button
                    ContainerStyles="bg-[#1c1c1c] p-3 rounded-r-xl"
                    handlePress={increment}
                  >
                    <Ionicons name="add-outline" size={24} color="white" />
                  </Button>
                </View>
              </View>

              {/* Total Section */}
              <Card containerStyles="flex-1 flex flex-row justify-between">
                <Text className="text-[#8f00ff] font-bold text-lg">Total</Text>
                <Text className="text-white text-lg">
                  ₹ {(cost * quantity).toFixed(2)}
                </Text>
              </Card>

              {/* Name Input Section */}
              <Card className="flex-1 flex flex-col space-y-3">
                <View>
                  <Text className="text-[#8f00ff] font-bold text-lg">Name</Text>
                </View>
                <View className="min-w-full h-[60px] p-4 bg-[#000000] rounded-xl items-start">
                  <TextInput
                    className="flex-1 text-white text-base w-full"
                    placeholder="Eg. Clothes"
                    value={name}
                    placeholderTextColor="#7a7a7a"
                    onChangeText={setName}
                    keyboardType="default"
                  />
                </View>
              </Card>

              {/* Description Input Section */}
              <Card containerStyles="flex-1 flex flex-col space-y-3">
                <View>
                  <Text className="text-[#8f00ff] font-bold text-lg">
                    Description
                  </Text>
                </View>
                <View className="min-w-full h-[150px] px-4 bg-[#000000] rounded-2xl items-start">
                  <TextInput
                    className="flex-1 text-white text-base h-full w-full"
                    placeholder="Eg. For Birthday"
                    value={description}
                    multiline={true}
                    placeholderTextColor="#7a7a7a"
                    onChangeText={setDescription}
                    keyboardType="default"
                  />
                </View>
              </Card>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Action Buttons */}
        <View className="absolute bottom-10 self-center justify-center rounded-full overflow-hidden">
          <BlurView
            intensity={30}
            experimentalBlurMethod="dimezisBlurView"
            tint="dark"
            style={{
              borderRadius: 20,
            }}
            className="flex flex-row space-x-2 rounded-full p-2 justify-center"
          >
            <View>
              <BackButton />
            </View>
            <View className="justify-center">
              <Button
                ContainerStyles="bg-[#8f00ff] p-3 w-[30vw] rounded-full justify-center items-center"
                handlePress={addPress}
              >
                <Text className="text-white text-lg">Add</Text>
              </Button>
            </View>
          </BlurView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Add;
