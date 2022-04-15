/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/tabs';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider
          store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'MainLayout'}
                >
                    <Stack.Screen
                        name="MainLayout"
                        component={Tabs}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App;