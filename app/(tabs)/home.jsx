import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler'
//import entername from '../(onboarding)/entername'\
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
      <SafeAreaView>
        <ScrollView>
          <View className="mt-10 mx-3">
            <Text className="text-white text-3xl font-bold ">Hello! User</Text>
          </View>
          <View className="bg-[#540495] w-11/12  rounded-2xl mt-5 p-3 self-center">
            <View className="flex flex-row mx-3 justify-between items-center">
              <View className="">
                <Text className="text-white text-2xl ">INR 0.00</Text>
              </View>
              <View className="">
                <Text className="text-white opacity-70">{checkMonthName(month)}</Text>
              </View>
            </View>
            <Text className="text-white opacity-70 self-start mx-3">of 5000</Text>
            <View className="w-11/12 h-10 bg-black justify-center self-center my-3 rounded-full ">
              <View className="w-1/2 h-10 bg-[#0FB700] rounded-full justify-start"></View>
            </View>
          </View>

          <View >
            <View>
              <Text className="text-[#7700D7] text-xl font-bold mx-3 mt-5">Today</Text>
            </View>
            <View className="justify-start items-center  space-y-2 my-5">
              <View className="bg-[#121212] w-11/12 my-1 items-center p-4 rounded-2xl">
                <View className="flex flex-row  w-11/12 justify-between items-center">
                  <Text className=" text-white">Burgers</Text>
                  <Text className=" text-white">INR 0.00</Text>
                </View>
              </View>
              <View className="bg-[#121212] w-11/12 my-1 items-center p-4 rounded-2xl">
                <View className="flex flex-row  w-11/12 justify-between items-center">
                  <Text className=" text-white">Burgers</Text>
                  <Text className=" text-white">INR 0.00</Text>
                </View>
              </View>
              <View className="bg-[#121212] w-11/12 my-1 items-center p-4 rounded-2xl">
                <View className="flex flex-row  w-11/12 justify-between items-center">
                  <Text className=" text-white">Burgers</Text>
                  <Text className=" text-white">INR 0.00</Text>
                </View>
              </View>
              
            </View>
          </View>

          <View>
            <View>
              <Text className="text-[#7700D7] text-xl font-bold mx-3 mt-5 mb-3">Categories</Text>
            </View>
            <View className="flex flex-row flex-wrap">
              <View className="basis-1/2">
                <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                  <Text className="text-white font-extrabold mt-3 ml-5">🍇Food</Text>
                </View>
              </View>
              <View className="basis-1/2">
                <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                  <Text className="text-white font-extrabold mt-3 ml-5">🍇Food</Text>
                </View>
              </View>
              <View className="basis-1/2">
                <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                  <Text className="text-white font-extrabold mt-3 ml-5">🍇Food</Text>
                </View>
              </View>
              <View className="basis-1/2">
                <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                  <Text className="text-white font-extrabold mt-3 ml-5">🍇Food</Text>
                </View>
              </View>
              <View className="basis-1/2">
                <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                  <Text className="text-white font-extrabold mt-3 ml-5">🍇Food</Text>
                </View>
              </View>
              <View className="basis-1/2">
                <View className="bg-[#121212] w-11/12 self-center h-32 rounded-lg my-2">
                  <Text className="text-white font-extrabold mt-3 ml-5">🍇Food</Text>
                </View>
              </View>
                 
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Home