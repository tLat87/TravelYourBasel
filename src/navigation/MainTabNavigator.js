import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import BackSvg from '../assets/svg/BackSvg';
import FactsScreen from '../screens/FactsScreen';
import SavedScreen from '../screens/SavedScreen';
import HomeSvg from '../assets/svg/HomeSvg';
import SecondScreenSvg from '../assets/svg/SecondScreenSvg';
import BookMarkSvg from '../assets/svg/BookMarkSvg';
// import FirstScreen from '../screens/FirstScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#360013', height: 130 },
                headerTitleStyle: {
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 24,
                },
                headerShadowVisible: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    height: 100,
                    width: '70%',
                    marginLeft: '15%',
                    backgroundColor: '#360013', // Немного прозрачности
                    borderRadius: 25, // Закругляем углы
                    paddingHorizontal: 1,
                    borderWidth: 1,
                    borderColor: '#B80041',
                    paddingTop: 30,
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,

                },
                tabBarIcon: ({ focused }) => {
                    let IconComponent;

                    if (route.name === 'Home') {
                        IconComponent = HomeSvg;
                    } else if (route.name === 'Facts') {
                        IconComponent = SecondScreenSvg;
                    } else if (route.name === 'Saved') {
                        IconComponent = BookMarkSvg;
                    }

                    return <IconComponent color={focused ? '#B80041' : '#fff'} />;
                },
                tabBarActiveTintColor: '#BC3D32',
                tabBarInactiveTintColor: '#aaaaaa',
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Facts"
                component={FactsScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'FACTS AND HISTORY',
                }}
            />
            <Tab.Screen
                name="Saved"
                component={SavedScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Favorite place',
                }}
            />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;
