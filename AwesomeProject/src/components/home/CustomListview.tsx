import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CustomRow from './CustomRow';
import {ICategoryItem} from "./types";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

interface IProps {
    list: ICategoryItem[];
}

const CustomListview: React.FC<IProps> = ({list}) => (
    <View style={styles.container}>
        <FlatList
            data={list}
            renderItem={({ item }) => <CustomRow
                title={item.name}
                description={item.description}
                // image_url={`https://slon.itstep.click/images/${item.image}`}
                image_url={`http://10.0.2.2:5139/images/${item.image}`}
            />}
        />

    </View>
);

export default CustomListview;