import React from 'react';

// import HomeScreen from "./src/components/home/HomeScreen";
import ThemeContextProvider, {useTheme} from "./contexts/ThemeContext";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import Router from "./navigators/Router";
import { store } from "./store";
import { Provider } from "react-redux";
import {APP_ENV} from "./env";



const App = () => {
    console.log("UrL site", APP_ENV.BASE_URL);
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