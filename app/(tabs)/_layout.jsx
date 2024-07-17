import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { Slot, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{ 
          headerShown: false,
          tabBarActiveTintColor: 'white', 
          justifyContent:'space-around',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 0,
            height: 70,
            // borderTopColor: '#711AB6',
            //#121212
            
          }
        }}
      >
        <Tabs.Screen
          name="home"
          options={{ 
            title: 'Home',
            tabBarIcon: ({ focused }) =>(
              <View style={{
                alignItems: 'center',
                paddingTop: 10,
                backgroundColor:"#121212",
                width: 80,
              }}>
            <Ionicons 
            name={focused ? 'home' : 'home-outline'}
            size={32} 
            color="white" 
            />
            <Text style={{
              color: focused ? 'white' : 'gray',
              fontSize: 2,
              marginTop: 4
            }}>.</Text>
            </View>
            )
            // headerShown: false
             
          }}
        />
        <Tabs.Screen
          name="activity"
          options={{ 
            title: 'Activity',
            tabBarIcon: ({ focused }) =>(
              <View style={{
                alignItems: 'center',
                paddingTop: 10,
                backgroundColor:"#121212",
                width: 80,
                borderTopRightRadius: 50,
                borderBottomRightRadius: -500
              }}>
            <Ionicons 
            name={focused ? 'calendar' : 'calendar-outline'}
            size={32} 
            color="white" 
            />
            <Text style={{
              color: focused ? 'white' : 'gray',
              fontSize: 2,
              marginTop: 4
            }}>.</Text>
            </View>
            )
            // headerShown: false
             
          }}
        />

        <Tabs.Screen
          name="add"
          options={{ 
            title: '',
            tabBarIcon: ({ focused }) =>(
              <View style={{
                alignItems: 'center',
              justifyContent: 'center',
              height:70,
              width:70,
              borderRadius:999,
              backgroundColor:'#711AB6',
              color: 'white',
              marginBottom:40,

              
              }}>
                
            <Ionicons 
            name={focused ? 'add' : 'add-outline'}
            size={35}
            color="white" 
            
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
              <View style={{
                alignItems: 'center',
                paddingTop: 10,
                borderTopLeftRadius: 50,
                backgroundColor:"#121212",
                width: 80,
              }}>
            <Ionicons 
            name={focused ? 'trophy' : 'trophy-outline'}
            size={32} 
            color="white" 
            />
            <Text style={{
              color: focused ? 'white' : 'gray',
              fontSize: 2,
              marginTop: 4
            }}>.</Text>
            </View>
            )
            // headerShown: false
             
          }}
            
        />
        <Tabs.Screen
          name="settings"
          options={{ 
            title: 'Settings',
            
            tabBarIcon: ({ focused }) =>(
              <View style={{
                alignItems: 'center',
                paddingTop: 10
                ,backgroundColor:"#121212",
                width: 80,
              }}>
            <Ionicons 
            name={focused ? 'settings' : 'settings-outline'}
            size={32} 
            color="white" 
            />
            <Text style={{
              color: focused ? 'white' : 'gray',
              fontSize: 2,
              marginTop: 4
            }}>.</Text>
            </View>
            )
            // headerShown: false
             
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
