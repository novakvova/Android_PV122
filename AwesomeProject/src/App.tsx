/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

// import HomeScreen from "./src/components/home/HomeScreen";
import ThemeContextProvider, {useTheme} from "./contexts/ThemeContext";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import Router from "./navigators/Router";



const App = () => {
    // const { colors, isDark } = useTheme();
    return (

        <>
            <ThemeContextProvider>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <Router />
                    </NavigationContainer>
                </SafeAreaProvider>
            </ThemeContextProvider>
        </>
    );
}

export default App;