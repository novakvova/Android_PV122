import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CustomListview from "./CustomListview";
import {useDispatch, useSelector} from "react-redux";
import {SetCategoryAction} from "../CategoryActions";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {useTheme} from "../../../contexts/ThemeContext";
import CategoryEditScreen from "../edit/CategoryEditScreen";
import {useNavigation} from "@react-navigation/native";
const CategoryListScreen = () => {
    const list = useSelector((state: any)=> state.category.list);
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const {colors, isDark} = useTheme();
    useEffect(() => {
        SetCategoryAction(dispatch);
    }, []);

    const Tab = createMaterialTopTabNavigator();

    return (
            <View style={styles.container}>
                <Text style={{fontSize: 25, textAlign: "center", fontWeight: "700"}}>Категорії</Text>
                <TouchableOpacity style={{alignItems: 'center', marginTop: 15}} onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: colors.primary, fontWeight: 'bold', fontSize: 14}}>Вхід</Text>
                </TouchableOpacity>
                <CustomListview
                    list={list}
                />
            </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        paddingBottom: 100
    }
});
export default CategoryListScreen;