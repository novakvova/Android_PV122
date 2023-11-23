import { View } from 'react-native'
import React from 'react'
import { MainStackNavigator } from './MainStackNavigator';
import { useTheme } from '../contexts/ThemeContext';

const Router = () => {

    const { colors, isDark } = useTheme();

    return (
        <View style={{ backgroundColor: colors.background, flex: 1 }}>
                <MainStackNavigator />
        </View>
    )
}
export default Router;