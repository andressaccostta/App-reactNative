// toda rota que PRECISA de autenticação vamos colocar aqui dentro
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';



const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


import Home from "../pages/Home";
import Details from "../pages/Details";

export default function AppRoutes() {
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home}  options={{tabBarBadge: 1}}></Tab.Screen>

            <Tab.Screen name="Details" component={Details}  options={{tabBarBadge: 2}}></Tab.Screen>
            
        </Tab.Navigator>
    );
}