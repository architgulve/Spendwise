import { View, Text } from "react-native";
import React from "react";
import Button from "./Button";
import Animated, { FadeIn, FadeOut, LinearTransition } from "react-native-reanimated";

const CatDropdownItem = ({ category, color , handlePress}) => {
  return (
    <View>
      <Animated.View
        layout={LinearTransition.springify().mass(0.3)}
        entering={FadeIn.delay(130)}
        exiting={FadeOut}
      >
        <Button
          handlePress={handlePress}
        >
          <View
            style={{
              // backgroundColor: `${color}35`,
              borderColor: color,
            }}
            className="px-6 py-3 m-2 rounded-full border border-1 items-center"
          >
            <Text
             className="font-medium"
             style={{
              color: color
             }}
            >{category}</Text>
          </View>
        </Button>
      </Animated.View>
    </View>
  );
};

export default CatDropdownItem;
