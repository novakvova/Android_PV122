import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {ICategoryItem} from "./types";
import CustomListview from "./CustomListview";
import http_common from "../../http_common";
import {useRoute} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {CategoryActionType} from "../category/types";
const HomeScreen = () => {
    //const [list, setList] = useState<ICategoryItem[]>([]);
    const route = useRoute();
    const list = useSelector((state: any)=> state.category.list);
    //console.log("List categories:", list);

    const dispatch = useDispatch();

    useEffect(() => {
        http_common.get<ICategoryItem[]>("/api/categories/list")
            .then(resp => {
                const {data} = resp;
                dispatch({type: CategoryActionType.SET_CATEGORY_LIST, payload: data});
                //setList(data);
                //console.log("-----Server responce-----", data);
            });
    }, [route.params]);


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