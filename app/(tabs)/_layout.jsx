import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
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
          gestureEnabled: false,          
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
              <BlurView intensity={70} tint="dark" style={StyleSheet.absoluteFill } />
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
            gestureEnabled: false,
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
            gestureEnabled: false,
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
          name="(add)"
          
          options={{ 
            gestureEnabled: false,
            tabBarStyle: { display: 'none' },
            title: '',
            
            tabBarIcon: ({ focused }) =>(
              // <Ionicons
              //   name = {focused ? 'add-circle' : 'add-circle-outline'}
              //   size={32}
              //   color="#711AB6"
              // />
              <View className={`justify-center items-center h-[64px] w-[64px] rounded-full mb-10 ${focused ? 'bg-[#8F00FF]' : 'bg-[#8F00FF] border-2 border-[#8F00FF] items-center'}`}>
                  
                <Ionicons 
                name={focused ? 'add' : 'add-outline'}
                size={48}
                color={focused ? 'black' : '#ffffff'} 
                className="self-center bg-slate-100 "
                /> 
              </View>
            )
            // headerShown: false
             
          }} 
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              router.push('/(add)');
            },
          }}
          />

        
        <Tabs.Screen
          name="badges"
          options={{ 
            gestureEnabled: false,
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
          name="(settings)"
          options={{ 
            gestureEnabled: false,
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
      {/* <View> */}
      {/* <View className={`justify-center items-center h-[64px] w-[64px] rounded-full mb-10 absolute bottom-[0px] self-center bg-[#8F00FF] `}>
                  
                  <Ionicons 
                  name="add"
                  size={48}
                  color="#fffffff" 
                  className="self-center bg-slate-100 "
                  /> 
                </View>

      </View> */}

    </SafeAreaProvider>

    

    </>
  )
}

export default TabsLayout
