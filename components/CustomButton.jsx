import { TouchableOpacity , Text} from 'react-native'
import React from 'react'

const CustomButton = ({handlePress, title, ContainerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress} 
        className={`bg-[#711AB6] rounded-full min-h-[60px] min-w-[200px] items-center justify-center
        ${ContainerStyles}
        ${isLoading ? 'opacity-70' : ''}`}
        disabled={isLoading}
    >
        <Text className={`text-white text-2xl p-4 ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton