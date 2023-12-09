import { View } from "react-native";
import React from "react";
import { MainStackNavigator } from "./MainStackNavigator";
import { useTheme } from "../contexts/ThemeContext";
import CategoryEditScreen from "../components/category/edit/CategoryEditScreen";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import LoginScreen from "../components/account/login/LoginScreen";

const Stack = createStackNavigator();




const Router = () => {
    const { colors, isDark } = useTheme();
    return (
        <View style={{ backgroundColor: colors.background, flex: 1 }}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginScreen" >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Вхід' }}
                />
                <Stack.Screen
                    name="TopNavbar"
                    component={MainStackNavigator}
                />
                <Stack.Screen
                    name="Edit"
                    component={CategoryEditScreen}
                    options={{ title: 'Редагувати' }}
                />
            </Stack.Navigator>
        </View>
    );
};
export default Router;