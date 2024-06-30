import { View, Text, ScrollView } from 'react-native'
import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler'
//import entername from '../(onboarding)/entername'
var month=new Date().getMonth() + 1;
checkMonthName =(month)=>{

  var monthName ;

    if(month == 1)  monthName = "January"
    else if(month == 2) monthName = "February" 
    else if(month == 3) monthName = "March"
    else if(month == 4) monthName = "April"
    else if(month == 5) monthName = "May"
    else if(month == 6) monthName = "June"
    else if(month == 7) monthName = "July"
    else if(month == 8) monthName = "August"
    else if(month == 9) monthName = "September"
    else if(month == 10) monthName = "October"
    else if(month == 11) monthName = "November"
    else if(month == 12) monthName = "December"

    return monthName;
}
const Home = () => {
  return (
    <View className="bg-black h-full ">
      <ScrollView contentContainerStyle={{ height: "100%" }} >
        <View className="mt-10 mx-3">
          <Text className="text-white text-3xl font-bold ">Hello! User</Text>
        </View>
        <View className="bg-[#711AB6] w-11/12 h-36 rounded-2xl mt-5 self-center">
          <View className="flex flex-row mx-3 mt-3 w-11/12 justify-between items-center">
            <View className="">
              <Text className="text-white text-3xl ">INR 0.00</Text>
            </View>
            <View className="">
              <Text className="text-white opacity-70">{checkMonthName(month)}</Text>
            </View>
          </View>
          <Text className="text-white opacity-70 self-start mx-3">of 5000</Text>
          <View className="w-11/12 h-10 bg-black justify-center self-center mt-3 rounded-full ">
            <View className="w-1/2 h-10 bg-green-500 rounded-full justify-start"></View>
          </View>
        </View>
        <View>
          <Text className="text-white text-2xl font-bold mx-3 mt-5 mb-3">Today</Text>
          <View className="justify-start items-start mx-5 space-y-2">
            <Text className="text-lg text-yellow-300">Burgers</Text>
            <Text className="text-lg text-red-300">Pizza</Text>
            <Text className="text-lg text-blue-300">Fries</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home