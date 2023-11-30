import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import CustomListview from "./CustomListview";
import {useRoute} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {GetListCategoriesAction} from "../category/CategoryActions";
const HomeScreen = () => {
    const list = useSelector((state: any)=> state.category.list);

    const dispatch = useDispatch();

    useEffect(() => {
        GetListCategoriesAction(dispatch);
    }, []);


    return (
        <>
            <View style={styles.container}>
                <Text style={{fontSize: 25, textAlign: "center", fontWeight: "700"}}>Категорії</Text>
                <CustomListview
                    list={list}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        paddingBottom: 100
    }
});
export default HomeScreen;