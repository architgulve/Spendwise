import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { Slot, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { BlurView } from 'expo-blur'

const TabsLayout = () => {
  return (
    <>
    <SafeAreaProvider>
      <Tabs
        
        screenOptions={{ 
          headerShown: false,
          tabBarActiveTintColor: 'white', 
          tabBarShowLabel: false,
          justifyContent:'space-around',
          tabBarInactiveTintColor: 'white',
                    
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            //borderTopColor: '#121212',
            alignContent: 'center',
            alignItems: 'center',
            borderTopWidth: 0,
            height: 80,            
          },
          tabBarBackground: () => (
            <View style={StyleSheet.absoluteFill}>
              <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
              <LinearGradient
                colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
                style={StyleSheet.absoluteFill}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
              />
            </View>
          ),
        }}
      >
        <Tabs.Screen
          name="home"
          options={{ 
            title: 'Home',
            tabBarIcon: ({ focused }) =>(
           // <View className="justify-center items-center bg-[#121212]  h-full">
              <Ionicons 
              name={focused ? 'home' : 'home-outline'}
              size={26} 
              color="white" 
              />
          //     {/* <Text style={{
          //       color: focused ? 'white' : 'gray',
          //       fontSize: 2,
          //       marginTop: 4
          //     }}>.</Text> */}
          //  </View>
            )
            // headerShown: false
             
          }}
        />
        <Tabs.Screen
          name="activity"
          options={{ 
            title: 'Activity',
            tabBarIcon: ({ focused }) =>(
             // <View className="justify-center items-center bg-[#121212] h-full w-[80px]">
            <Ionicons 
            name={focused ? 'calendar' : 'calendar-outline'}
            size={26} 
            color="white" 
            />
           // </View>
            )
            // headerShown: false
             
          }}
        />

        <Tabs.Screen
          name="add"
          
          options={{ 
            title: '',
            
            tabBarIcon: ({ focused }) =>(
              <Ionicons
                name = {focused ? 'add-circle' : 'add-circle-outline'}
                size={32}
                color="#711AB6"
              />
              // <View className={`justify-center items-center h-[26px] w-[26px] rounded-full ${focused ? 'bg-[#7700D7]' : 'bg-[#701ab621] border-2 border-[#711AB6]'}`}>
                  
              //   <Ionicons 
              //   name={focused ? 'add' : 'add-outline'}
              //   size={28}
              //   color={focused ? 'black' : '#711AB6'} 
                
              //   /> 
              // </View>
            )
            // headerShown: false
             
          }} 
          />

        
        <Tabs.Screen
          name="badges"
          options={{ 
            title: 'Badges',
            tabBarIcon: ({ focused }) =>(
              //<View className="justify-center items-center bg-[#121212] w-[80px] h-full ">
            <Ionicons 
            name={focused ? 'trophy' : 'trophy-outline'}
            size={26} 
            color="white" 
            />
           // </View>
            )
            // headerShown: false
             
          }}
            
        />
        <Tabs.Screen
          name="settings"
          options={{ 
            title: 'Settings',
            
            tabBarIcon: ({ focused }) =>(
             // <View className="justify-center items-center bg-[#121212] w-[80px] h-full">
            <Ionicons 
            name={focused ? 'settings' : 'settings-outline'}
            size={26} 
            color="white" 
            />
            //</View>
            )
            // headerShown: false
             
          }}
        />
      </Tabs>

    </SafeAreaProvider>

    

    </>
  )
}

export default TabsLayout
