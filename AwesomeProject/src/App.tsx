/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import ThemeContextProvider, {useTheme} from "./contexts/ThemeContext";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import Router from "./navigators/Router";
import {Provider} from "react-redux";
import {store} from "./store";

const App = () => {
    // const { colors, isDark } = useTheme();
    return (

        <Provider store={store}>
            <ThemeContextProvider>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <Router />
                    </NavigationContainer>
                </SafeAreaProvider>
            </ThemeContextProvider>
        </Provider>
    );
}

export default App;