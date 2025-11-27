import { Tabs } from 'expo-router';
import React from 'react';
import {Text} from 'react-native'

export default function TabsLayout(){
    return(
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name='(decks)' options={{title:"Decks", tabBarLabel: "Decks", tabBarIcon: () => <Text style={{ fontSize: 18 }}>🗂️</Text>,}}/>
            <Tabs.Screen name='(study)' options={{title:"Study", tabBarLabel: "Study", tabBarIcon: () => <Text style={{ fontSize: 18 }}>⭐</Text>,}}/>
    
        </Tabs>
    );
}