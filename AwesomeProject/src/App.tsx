import React, {useEffect} from 'react';

// import HomeScreen from "./src/components/home/HomeScreen";
import ThemeContextProvider, {useTheme} from "./contexts/ThemeContext";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import Router from "./navigators/Router";
import { store } from "./store";
import { Provider } from "react-redux";
import {APP_ENV} from "./env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {LoginUserRedux} from "./components/account/AuthActions";



const App = () => {
    useEffect(() => {
        loadToken();
    }, []);

    const loadToken = async () => {
        try {
            // Load the JWT token from AsyncStorage
            const storedToken = await AsyncStorage.getItem('jwtToken');
            if (storedToken !== null) {
                LoginUserRedux(store.dispatch, storedToken);
            }
        } catch (error) {
            console.error('Error loading token:', error);
        }
    };
    //console.log("UrL site", APP_ENV.BASE_URL);
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