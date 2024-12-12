import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { router, useSegments } from "expo-router";
import BackButton from "../components/backbutton";
import ColorPicker, {
  HueSlider,
  Swatches,
  SaturationSlider,
} from "reanimated-color-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  LinearTransition,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import Card from "../components/Card";
import Button from "../components/Button";
import { addCategory, deleteCategariesTable, deleteExpensesTable } from "../utils/database";

const addcategory = () => {
  const previewColor = useSharedValue("#8f00ff");
  const [catName, setcatName] = useState("Category");

  const onSelectColor = ({ hex }) => {
    previewColor.value = hex;
  };

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: previewColor.value,
    };
  });

  return (
    <SafeAreaView edges={["top"]} className="bg-[#000000] h-full">
      <View className="justify-between h-full">
        <View>
          <View className="w-full h-16 bg-black p-4">
            <View className="flex flex-row justify-between items-center w-full ">
              <Text className="text-white font-semibold text-2xl">
                Add New Category
              </Text>
              <Button
                handlePress={() => {
                  router.back();
                }}
              >
                <View>
                  <Text className="text-[#8f00ff]">Cancel</Text>
                </View>
              </Button>
            </View>
          </View>
          {/* <ScrollView className="h-full bg-black"> */}
          <View className="m-3">
            <Card>
              <Text className="text-[#5f5f5f] font-light">PREVIEW</Text>
              <View className="items-center p-10">
                <Animated.Text
                  className="font-semibold"
                  style={[animatedTextStyle, { fontSize: 30 }]}
                >
                  {catName}
                </Animated.Text>
              </View>
            </Card>

            <Card>
              <TextInput
                autoCapitalize="words"
                clearButtonMode="while-editing"
                placeholder="Name your Category"
                returnKeyType="done"
                onChangeText={(text) => {
                  setcatName(text);
                }}
                style={{
                  color: "white",
                }}
              />
            </Card>

            <Card containerStyles="items-center">
              <ColorPicker
                className="space-y-5 w-full"
                onComplete={onSelectColor}
                onChange={onSelectColor}
                boundedThumb
                sliderThickness={35}
                thumbSize={45}
                thumbShape="ring"
                value="#8f00ff"
              >
                <ScrollView horizontal>
                  <Swatches
                    className="flex flex-row"
                    swatchStyle={{
                      borderRadius: 99,
                      height: 35,
                      width: 35,
                      marginHorizontal: 10,
                    }}
                  />
                </ScrollView>
                <HueSlider style={{ borderRadius: 99 }} />
                <SaturationSlider style={{ borderRadius: 99 }} />
              </ColorPicker>
            </Card>
          </View>
        </View>

        <View className="items-center mb-10 ">
          <Button
            handlePress={() => {
              addCategory(catName,previewColor.value)
              // deleteCategariesTable();
              // deleteExpensesTable();
            }}
          >
            <View className="bg-[#8f00ff35] py-4 px-8 rounded-full">
              <Text className="text-[#8f00ff] font-semibold text-base">
                Add Category
              </Text>
            </View>
          </Button>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default addcategory;
