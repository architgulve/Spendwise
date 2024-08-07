import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { MotiView } from 'moti';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledPressable = styled(Pressable);
const StyledText = styled(Text);
const StyledMotiView = styled(MotiView);

const SegmentedControl = ({ options = [], onChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  if (options.length === 0) return null;

  const segmentWidth = containerWidth / options.length;

  return (
    <StyledView
      className="flex-row bg-[#121212] rounded-full overflow-hidden"
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <StyledMotiView
        className="absolute top-0 bottom-0 bg-[#9000ff35] rounded-full"
        animate={{
          translateX: segmentWidth * selectedIndex,
        }}
        transition={{
          type: 'spring',
          // duration: 300,

        }}
        style={{
          width: segmentWidth,
        }}
      />
      {options.map((option, index) => (
        <StyledPressable
          key={option}
          className="py-3 items-center justify-center"
          style={{ width: segmentWidth }}
          onPress={() => {
            setSelectedIndex(index);
            onChange?.(option);
          }}
        >
          <StyledText
            className={`text-white ${selectedIndex === index ? 'text-[#8F00FF]' : ''} ${selectedIndex === index ? 'font-bold' : ''}`}
          >
            {option}
          </StyledText>
        </StyledPressable>
      ))}
    </StyledView>
  );
};

export default SegmentedControl;
