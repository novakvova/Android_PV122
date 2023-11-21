import React, {useEffect, useState} from "react";
import axios from "axios";
import {StyleSheet, Text, View} from "react-native";
import {ICategoryItem} from "./types";
import CustomListview from "./CustomListview";
const HomePage = () => {
    const [list, setList] = useState<ICategoryItem[]>([]);

    useEffect(() => {
        axios.get<ICategoryItem[]>("https://slon.itstep.click/api/categories/list")
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
export default HomePage;