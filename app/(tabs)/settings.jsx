import { View, Text, ScrollView,} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Card from '../../components/Card';

const Settings = () => {
  return (
    <SafeAreaView
      edges={["top"]}
      className="bg-[#000000] h-full "
    >
    <StatusBar hidden={false} style="light" />
      <ScrollView>
        <View className="m-3">
          <View className="flex flex-col space-y-5">

              <View className="flex-1">
                <Text className="text-white text-3xl font-bold">Settings</Text>
              </View>
              
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Settings