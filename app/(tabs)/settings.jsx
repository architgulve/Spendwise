import { useRouter } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'moti';
import { View, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Settings = () => {
  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Settings">
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'space-between',
      backgroundColor: '#1E1E1E',
      padding: 15,
      borderRadius: 15,
      marginVertical: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
    text: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 10,
      textTransform: 'capitalize',
      letterSpacing: 0.5,
      
    },
    header: {
      backgroundColor: 'black',
      padding: 20,
      alignItems: 'left',
    },
    
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ScrollView>
        <View style={styles.header}>
        <Text className="text-white text-3xl font-bold mt-10">Settings</Text>
        </View>
        <View style={{ padding: 20 }}>
          <View style={styles.container}>
            <Ionicons name="person-outline" size={24} color="#7C4DFF" />
            <Text style={styles.text}>Profile</Text>
          </View>
          <View style={styles.container}>
            <Ionicons name="moon-outline" size={24} color="#FFC107" />
            <Text style={styles.text}>Light-Dark Mode</Text>
          </View>
          <View style={styles.container}>
            <Ionicons name="notifications-outline" size={24} color="#4CAF50" />
            <Text style={styles.text}>Notifications</Text> 
          </View>
          <View style={styles.container}>
            <Ionicons name="share-outline" size={24} color="#2196F3" />
            <Text style={styles.text}>Refer a Friend </Text>
          </View>
          <View style={styles.container}>
            <Ionicons name="mail-outline" size={24} color="#E91E63" />
            <Text style={styles.text}>Contact Us</Text>
          </View>
          <View style={styles.container}>
            <Ionicons name="document-outline" size={24} color="#9E9E9E" />
            <Text style={styles.text}>Terms and conditions</Text>
          </View>
          <View style={styles.container}>
            <Ionicons name="information-circle-outline" size={24} color="#FF5722" />
            <Text style={styles.text}>About</Text>
          </View>
          <View style={styles.container}>
            <Ionicons name="help-circle-outline" size={24} color="#673AB7" />
            <Text style={styles.text}>Help</Text>
          </View>
          
          <View style={styles.container}>
            <Ionicons name="log-out-outline" size={24} color="#F44336" />
            <Text style={styles.text}>Logout</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
