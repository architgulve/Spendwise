import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const SlidesInLeft = ({ children, ...props }) => {
  const slideAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <Animated.View 
      style={{ 
        transform: [{ 
          translateX: slideAnim 
        }]
      }}
    >
      {children}
    </Animated.View>
  );
};

export default SlidesInLeft;