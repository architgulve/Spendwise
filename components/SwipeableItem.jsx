import Animated, { 
  useAnimatedGestureHandler, 
  useAnimatedStyle, 
  useSharedValue, 
  withTiming,
  runOnJS,
  interpolate
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from "expo-haptics";

const SWIPE_THRESHOLD = -240;
const SNAP_THRESHOLD = -240; 

const SwipeableItem = ({ children, onDelete, item }) => {
  const translateX = useSharedValue(0);
  const hasSnapped = useSharedValue(false);

  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < SWIPE_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-1000);
        runOnJS(onDelete)();
      } else {
        translateX.value = withTiming(0);
      }

      hasSnapped.value = false;
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));


  const handleSnap = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch((e) => console.log(e));
  };

  const dStyle = useAnimatedStyle(() => {
      // opacity: translateX.value < SWIPE_THRESHOLD ? 1 : 1,
    const shouldsnap = translateX.value < SNAP_THRESHOLD;

    if (shouldsnap && !hasSnapped.value) {
      hasSnapped.value = true;
      runOnJS(handleSnap)();
    } else if (!shouldsnap) {
      hasSnapped.value = false;
    }

    const iconPosition = interpolate(
      translateX.value,
      [0, SWIPE_THRESHOLD],
      ['flex-end', 'flex-start'],
    );

    return {
      padding: translateX.value > -0.5 ? 0 : 12.5,
      width: -translateX.value,
     
      alignItems: translateX.value < SWIPE_THRESHOLD ? 'flex-start' : 'center', 
      backgroundColor: 'red', 
    }

  });

  return (
    <View className="w-full justify-center">
      <Animated.View 
        className={`absolute right-0  rounded-xl `}
        style={[dStyle]}
      >
        {/* <Text className="text-white text-lg">Delete</Text> */}
        <Ionicons name="trash-outline" size={24} color="white" />
      </Animated.View>
      <Animated.View style={[rStyle]} className="w-full">
        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View className="w-full">
            {children}
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </View>
  );
};

export default SwipeableItem;