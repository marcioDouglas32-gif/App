import { useNavigation } from '@react-navigation/core';
import React from 'react';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';


//tabNavigation
import Execicios from './Tab/Execicios';
import Execicioss from './Tab/Execicioss';
import Seach from './Tab/Seach';
import Cronometro from './Tab/Cronometro';
import  Pefil  from './Drawe/Pefil';
import  Ajuda  from './Drawe/Ajuda';
import { color } from 'react-native-reanimated';
import {Entypo, Feather} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';







const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function HomeScreen (){

   
  return (

      <Tab.Navigator screenOptions={{
      
        headerTintColor: '#000000',
        tabBarActiveTintColor: 'white',
        ActiveTintColor:'white',
        tabBarStyle:{
          
          paddingBottom:5,
          borderTopColor:'transparent',
          backgroundColor:'#000000',
          color:'#ffffff'
          
          
           },
          
      }

      }>
    <Tab.Screen name="Execicios" component={Execicios}
    options={{tabBarActiveBackgroundColor:'white', paddingTop:5,
    paddingBottom:10,tabBarActiveTintColor:'black',
    tabBarIcon:({size,color})=>(
      <Ionicons name="barbell" size={size} color={color}/>
      
    )
  }   
  }
    
    
    />

    <Tab.Screen name="Seach" component={Seach}
     options={{tabBarActiveBackgroundColor:'white', paddingTop:5,
     paddingBottom:10,tabBarActiveTintColor:'black',
     tabBarIcon:({size,color})=>(
      <Ionicons name="search-sharp" size={size} color={color} />
      
    )
    }}
     
    />
    <Tab.Screen name="Cronômetro" component={Cronometro} 
    options={{tabBarActiveBackgroundColor:'white', paddingTop:5,
    paddingBottom:10,tabBarActiveTintColor:'black',
    tabBarIcon:({size,color})=>(
      <Ionicons name="md-timer" size={size} color={color} />
      
    )
    }}/>
    <Tab.Screen name="SingOut" component={Execicioss} 
    options={{tabBarActiveBackgroundColor:'white', paddingTop:5,
    paddingBottom:10,tabBarActiveTintColor:'black',
    tabBarIcon:({size,color})=>(
      <Entypo name="log-out" size={size} color={color} />
      
    )
    }}/>
    
  </Tab.Navigator>
  
    
  );



}

