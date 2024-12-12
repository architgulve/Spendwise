import React from "react";
import { StyleSheet, Text } from "react-native";
import Color from "color";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";

const activecolor = "#8f00f0";
const inactivecolor = "#ffffff79";

const TimingConfig = {
  duration: 150,
};

const CatToggles = ({ label, onPress }) => {
  const [selected, setSelected] = React.useState(false);
  const pressed = useSharedValue(false);
  const fadedActiveColor = Color(activecolor).alpha(0.1).toString();

  const toggleSelected = () => {
    setSelected((prev) => {
      const newSelected = !prev;
      onPress && onPress(newSelected);
      return newSelected;
    });
  };
  const handleHapticFeedback = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
  };

  const gesture = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
      runOnJS(handleHapticFeedback)();
    })
    .onEnd(() => {
      pressed.value = false;
      runOnJS(toggleSelected)();
    });

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        selected ? fadedActiveColor : "transparent",
        TimingConfig
      ),
      borderColor: withTiming(
        selected ? activecolor : inactivecolor,
        TimingConfig
      ),
      paddingLeft: 20,
      paddingRight: !selected ? 20 : 14,
      transform: [{ scale: withSpring(pressed.value ? 0.95 : 1) }],
    };
  }, [selected]);

  const rTextStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(selected ? activecolor : inactivecolor, TimingConfig),
    };
  }, [selected]);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        layout={LinearTransition.springify().mass(0.1)}
        style={[rContainerStyle]}
        className="flex flex-row items-center border rounded-full p-3 m-1"
      >
        <Animated.Text style={[rTextStyle]} className="text-white text-sm">
          {label}
        </Animated.Text>
        {selected && (
          <Animated.View
            entering={FadeIn.duration(350)}
            exiting={FadeOut}
            className="ml-2 justify-center items-center"
          >
            <AntDesign name="checkcircle" size={20} color={activecolor} />
          </Animated.View>
        )}
      </Animated.View>
    </GestureDetector>
  );
};

export default CatToggles;
