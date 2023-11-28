import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {ICategoryItem} from "./types";
import CustomListview from "./CustomListview";
import http_common from "../../http_common";
const HomeScreen = () => {
    const [list, setList] = useState<ICategoryItem[]>([]);

    useEffect(() => {
        http_common.get<ICategoryItem[]>("/api/categories/list")
            .then(resp => {
                const {data} = resp;
                setList(data);
                //console.log("-----Server responce-----", data);
            });
    }, []);


    return (
        <>
            <View style={styles.container}>
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
    }
});
export default HomeScreen;