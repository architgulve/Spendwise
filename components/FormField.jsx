import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { MotiPressable } from "moti/interactions";
import { MotiView } from "moti";

const FormField = ({
  title,
  value,
  handleChangeText,
  placeholder,
  keyboardType,
  autocomplete,
  otherStyles,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className={`space-y-2  ${otherStyles}`}>
      {/* <Text className="text-white">{title}</Text> */}
      {/* <View className="bg-[#1d1d1d] rounded-lg h-16 w-1/2 justify-center items-start"> */}
      <MotiView
        animate={{
          shadowOpacity: isFocused ? 1 : 0,
          shadowColor: isFocused ? "#711AB6" : "transparent",
          shadowRadius: isFocused ? 20 : 0,
          // borderColor: isFocused ? '#transparent' : '#fff',
          // borderWidth: isFocused ? 0 : 1,
          // borderRadius: isFocused ? 15 : 15,
        }}
        transition={{
          type: "timing",
          duration: 500,
        }}
        shadowOffset={{ width: 0, height: 0 }}
      >
        <View
          className={
            " min-w-full h-[60px] px-4 bg-[#E7E7E7] rounded-2xl items-start "
          }
        >
          <TextInput
            className="flex-1 text-black text-base w-full"
            placeholder={placeholder}
            value={value}
            placeholderTextColor="#626262"
            onChangeText={handleChangeText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            keyboardType={keyboardType}
            autoComplete={autocomplete}
            keyboardAppearance="dark"
            {...props}
          />
        </View>
      </MotiView>
    </View>
  );
};

export default FormField;
