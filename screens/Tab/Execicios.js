import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
  import { View, Button } from 'react-native';
  import React from 'react';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import  Pefil  from '../Drawe/Pefil';
import  Ajuda  from '../Drawe/Ajuda';

  const Drawer = createDrawerNavigator();

  export default function Execicios() {
   
  
    return (
        <Drawer.Navigator useLegacyImplementation={true} >
          <Drawer.Screen name='Editar Perfil'  component={Pefil}/>
          <Drawer.Screen name='Ajuda'  component={Ajuda}/>
        </Drawer.Navigator>
    );
  }