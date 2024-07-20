import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { Slot, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const TabsLayout = () => {
  return (
    <>
    

      <Tabs
        
        screenOptions={{ 
          headerShown: false,
          tabBarActiveTintColor: 'white', 
          tabBarShowLabel: false,
          //justifyContent:'space-around',
          tabBarInactiveTintColor: 'white',
        
          tabBarStyle: {
            backgroundColor: 'black',
            //LinearGradient: '#121212',

            borderTopWidth: 0,
            height: 60
            ,
            
            
          }
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
              size={32} 
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
            size={32} 
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
              <View className={`justify-center items-center h-[32px] w-[32px] rounded-full ${focused ? 'bg-[#7700D7]' : 'bg-[#701ab63f] border-2 border-[#711AB6]'}`}>
                  
                <Ionicons 
                name={focused ? 'add' : 'add-outline'}
                size={28}
                color={focused ? 'black' : '#711AB6'} 
                
                /> 
              </View>
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
            size={32} 
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
            size={32} 
            color="white" 
            />
            //</View>
            )
            // headerShown: false
             
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
