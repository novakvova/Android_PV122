import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert} from 'react-native';
import Icon from "../../icon/Icon";
import {useDispatch} from "react-redux";
import {DeleteCategoryAction} from "../CategoryActions";
import {useNavigation} from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },

    container_buttons: {
        flex: 0,
        flexDirection: 'column',
        marginRight: 2,
        justifyContent: 'flex-end',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
    myIconStyle: {
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 5,
    },
});

interface IProps {
    id: number,
    title: string,
    description: string;
    image_url: string
}

const CustomRow: FC<IProps> = ({id, title, description, image_url}) => {

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const deleteItem = (id: number) => {
        Alert.alert(
            "Видалення",
            "Ви дійсно бажаєте видалить?",
            [
                {
                    style: 'destructive',
                    text: "Видалить",
                    onPress: () => {
                        DeleteCategoryAction(dispatch, id);
                    },
                },
                {
                    text: "Скасувати",
                },
            ]
        );
    }

    return (
        <View style={styles.container}>
            <Image source={{uri: image_url}} style={styles.photo}/>
            <View style={styles.container_text}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>

            <View style={styles.container_buttons}>
                <Text>
                    <TouchableOpacity onPress={() => {
                        console.log("Edit item", id)
                        navigation.navigate('Edit', { id });

                    }} style={styles.myIconStyle}>
                        <Icon
                            type={"edit"}
                            size={35}
                            focused={false}
                            isDark={false}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        //console.log("Delete item", id)
                        deleteItem(id);
                    }} style={styles.myIconStyle}>
                        <Icon
                            type={"delete"}
                            size={35}
                            focused={false}
                            isDark={false}
                        />
                    </TouchableOpacity>
                </Text>
            </View>

        </View>
    );
}

export default CustomRow;