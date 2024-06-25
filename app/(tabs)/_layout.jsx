import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { Slot, Stack } from 'expo-router'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{ 
          headerShown: false,
          tabBarActiveTintColor: '#711AB6', 
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 0,
            height: 60,
            // borderTopColor: '#711AB6',
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{ 
            title: 'Home',
            // headerShown: false
             
          }}
        />
        <Tabs.Screen
          name="activity"
          options={{ 
            title: 'Activity',
            // headerShown: false
             
          }}
        />
        <Tabs.Screen
          name="badges"
          options={{ 
            title: 'Badges',
            // headerShown: false
             
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{ 
            title: 'Settings',
            // headerShown: false
             
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
