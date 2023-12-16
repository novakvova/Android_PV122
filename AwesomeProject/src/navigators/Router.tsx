import { View } from "react-native";
import React from "react";
import { MainStackNavigator } from "./MainStackNavigator";
import { useTheme } from "../contexts/ThemeContext";
import CategoryEditScreen from "../components/category/edit/CategoryEditScreen";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import LoginScreen from "../components/account/login/LoginScreen";
import RegisterScreen from "../components/account/register/RegisterScreen";
import {useSelector} from "react-redux";
import {IAuthReducer} from "../components/account/types";

const Stack = createStackNavigator();




const Router = () => {
    const {isAuth} = useSelector((store: any)=>store.auth as IAuthReducer);
    const { colors, isDark } = useTheme();
    return (
        <View style={{ backgroundColor: colors.background, flex: 1 }}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={isAuth?"TopNavbar":"Login"}>

                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Вхід' }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ title: 'Реєстрація' }}
                />
                <Stack.Screen
                    name="Edit"
                    component={CategoryEditScreen}
                    options={{ title: 'Редагувати' }}
                />
                <Stack.Screen
                    name="TopNavbar"
                    component={MainStackNavigator}
                />
            </Stack.Navigator>
        </View>
    );
};
export default Router;