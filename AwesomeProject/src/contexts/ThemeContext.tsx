import React, { createContext, Component, useState, useEffect } from "react";
import Dark from "../themes/Dark";
import Light from "../themes/Light";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Theme} from "../themes/types";

interface ThemeContextProps {
    isDark: boolean,
    colors: Theme,
    setIsDark(value:boolean): void,
    toggleTheme():void
}
const initialState:ThemeContextProps = {
    isDark: false, //true,
    colors: Light, //Dark,
    setIsDark: () => {},
    toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextProps>(initialState);



const getTheme = () => {
    const theme = AsyncStorage.getItem("theme");
    if (!theme) {
        // Default theme is taken as dark-theme
        AsyncStorage.setItem("theme", "light"/*"dark"*/);
        return "light";//"dark";
    } else {
        return theme;
    }
};

export default function ThemeContextProvider({children}:{children:any}) {
    const [colors, setColors] = useState(Light); //useState(Dark);
    const [isDark, setIsDark] = useState(true);
    // state = {
    //     isLightTheme: true,
    //     dark: Dark,
    //     light: Light,
    // };
    function toggleTheme() {
        if (isDark) {
            setColors(Light);
        } else {
            setColors(Dark);
        }
    };

    useEffect(() => {
        const refreshTheme = () => {
            AsyncStorage.setItem("theme", isDark ? "dark" : "light");
        };

        refreshTheme();
    }, [colors]);

    // toggle current theme


    return (
        // pass state and fun to whole app
        <ThemeContext.Provider value={{
            colors,
            isDark,
            setIsDark,
            toggleTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => React.useContext(ThemeContext);