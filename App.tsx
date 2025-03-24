import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import WelcomeScreen from "./src/navigation/WelcomeScreen";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import BackSvg from "./src/assets/svg/BackSvg.tsx";
import HistoricalPlacesScreen from "./src/screens/HistoricalPlacesScreen";
import AboutHistoricalPlacesScreen from "./src/screens/AboutHistoricalPlacesScreen";
import MapScreen from "./src/screens/MapScreen";
import FactsDetails from "./src/screens/FactsDetails";
import StoriesDetails from "./src/screens/StoriesDetails";
import Loader from "./src/screens/Loader";


const Stack = createStackNavigator();

const Left = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackSvg/>
        </TouchableOpacity>
    )
}


export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerLeft: Left, headerStyle: { backgroundColor: '#360013', height: 130, },
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 24,
                        },
                    }}>
                        <Stack.Screen name="Splash" component={Loader} options={{ headerShown: false }} />
                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="HistoricalPlaces" component={HistoricalPlacesScreen} options={{ headerTitle: 'Historical places' }} />

                        <Stack.Screen name="AboutHistoricalPlaces" component={AboutHistoricalPlacesScreen} options={{ headerTitle: 'Historical places' }} />
                        <Stack.Screen name="Map" component={MapScreen}/>

                        <Stack.Screen name="FactsDetails" component={FactsDetails} options={{ headerTitle: 'FACTS AND HISTORY' }} />
                        <Stack.Screen name="StoriesDetails" component={StoriesDetails} options={{ headerTitle: 'FACTS AND HISTORY' }} />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
