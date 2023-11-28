import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useTheme} from "../contexts/ThemeContext";
import {StyleSheet, View} from "react-native";
import React from "react";
// import {BlurView} from "expo-blur";
import HomeScreen from "../components/home/HomeScreen";
import Icon from "../components/icon/Icon";
import CreateScreen from "../components/create/CreateScreen";
import TestScreen from "../components/test/TestScreen";

const MainTab = createBottomTabNavigator();

export const MainStackNavigator = () => {
    const { colors, isDark } = useTheme();

    return (
        <View style={{ backgroundColor: colors.background, flex: 1 }}>
            <MainTab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: colors.primary,
                    tabBarShowLabel: true,
                    tabBarStyle: {
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.0,
                        elevation: 24,
                        position: 'absolute',
                        bottom: 0,
                        padding: 10,
                        width: '100%',
                        height: 84,
                        zIndex: 0,
                        borderTopWidth: 0.3,
                        borderTopColor: colors.icon,
                    },

                    headerShown: false,
                    // tabBarBackground: () => (
                    //     <BlurView
                    //
                    //         tint={isDark ? "dark" : "light"}
                    //         intensity={100}
                    //         style={StyleSheet.absoluteFillObject}
                    //
                    //     >
                    //         <View
                    //             style={{
                    //                 height: 96,
                    //
                    //             }}
                    //         />
                    //     </BlurView>
                    // ),
                }}
            >

                <MainTab.Screen
                    name={'Home'}
                    component={HomeScreen}
                    options={{
                        title: 'Home',
                        headerStyle: { backgroundColor: colors.containerBackground, borderBottomWidth: 0, borderWidth: 0 },
                        headerTitleStyle: { color: colors.mainText },
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                type={"house"}
                                size={20}
                                focused={focused}
                                isDark={isDark}
                            />
                        ),
                    }}
                />

                <MainTab.Screen
                    name={'Create'}
                    component={CreateScreen}
                    options={{
                        title: 'Add',
                        headerStyle: { backgroundColor: colors.containerBackground, borderBottomWidth: 0, borderWidth: 0 },
                        headerTitleStyle: { color: colors.mainText },
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                type={"createIcon"}
                                size={20}
                                focused={focused}
                                isDark={isDark}
                            />
                        ),
                    }}
                />

                <MainTab.Screen
                    name={'Test'}
                    component={TestScreen}
                    options={{
                        title: 'Test',
                        headerStyle: { backgroundColor: colors.containerBackground, borderBottomWidth: 0, borderWidth: 0 },
                        headerTitleStyle: { color: colors.mainText },
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                type={"house"}
                                size={20}
                                focused={focused}
                                isDark={isDark}
                            />
                        ),
                    }}
                />

            </MainTab.Navigator>
        </View>

    );
}